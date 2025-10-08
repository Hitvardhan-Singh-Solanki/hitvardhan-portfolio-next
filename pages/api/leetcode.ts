import type { NextApiRequest, NextApiResponse } from "next";
import { LeetCodeStats } from "@/components/leetcode-stats/leetcode-stats";

interface LeetCodeAPIResponse {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
}

interface LeetCodeGraphQLResponse {
  data: {
    matchedUser: {
      username: string;
      profile: {
        ranking: number;
        reputation: number;
      };
      submitStats: {
        acSubmissionNum: Array<{
          difficulty: string;
          count: number;
        }>;
      };
    };
    allQuestionsCount: Array<{
      difficulty: string;
      count: number;
    }>;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LeetCodeStats | { error: string }>
) {
  const { username } = req.query;

  if (!username || typeof username !== "string") {
    return res.status(400).json({ error: "Username is required" });
  }

  try {
    // Try using the unofficial LeetCode API first
    const apiUrl = `https://leetcode-stats-api.herokuapp.com/${username}`;
    const apiResponse = await fetch(apiUrl);

    if (apiResponse.ok) {
      const data: LeetCodeAPIResponse = await apiResponse.json();

      if (data.status === "success") {
        const stats: LeetCodeStats = {
          username: username,
          totalSolved: data.totalSolved,
          totalQuestions: data.totalQuestions,
          easySolved: data.easySolved,
          mediumSolved: data.mediumSolved,
          hardSolved: data.hardSolved,
          acceptanceRate: data.acceptanceRate,
          ranking: data.ranking,
          contributionPoints: data.contributionPoints || 0,
          reputation: data.reputation || 0,
        };

        return res.status(200).json(stats);
      }
    }

    // Fallback to LeetCode GraphQL API
    const graphqlQuery = {
      query: `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            username
            profile {
              ranking
              reputation
            }
            submitStats {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
          allQuestionsCount {
            difficulty
            count
          }
        }
      `,
      variables: { username },
    };

    const graphqlResponse = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify(graphqlQuery),
    });

    if (!graphqlResponse.ok) {
      throw new Error("Failed to fetch from LeetCode GraphQL API");
    }

    const graphqlData: LeetCodeGraphQLResponse = await graphqlResponse.json();

    if (!graphqlData.data?.matchedUser) {
      throw new Error("User not found");
    }

    const { matchedUser, allQuestionsCount } = graphqlData.data;
    const submissions = matchedUser.submitStats.acSubmissionNum;

    const getCount = (difficulty: string) => {
      const item = submissions.find((s) => s.difficulty === difficulty);
      return item ? item.count : 0;
    };

    const getTotalCount = (difficulty: string) => {
      const item = allQuestionsCount.find((q) => q.difficulty === difficulty);
      return item ? item.count : 0;
    };

    const easySolved = getCount("Easy");
    const mediumSolved = getCount("Medium");
    const hardSolved = getCount("Hard");
    const totalSolved = getCount("All");

    const totalQuestions = getTotalCount("All");

    const acceptanceRate =
      totalQuestions > 0 ? (totalSolved / totalQuestions) * 100 : 0;

    const stats: LeetCodeStats = {
      username: matchedUser.username,
      totalSolved,
      totalQuestions,
      easySolved,
      mediumSolved,
      hardSolved,
      acceptanceRate,
      ranking: matchedUser.profile.ranking || 0,
      contributionPoints: 0, // Not available in GraphQL response
      reputation: matchedUser.profile.reputation || 0,
    };

    return res.status(200).json(stats);
  } catch (error) {
    console.error("Error fetching LeetCode stats:", error);
    return res.status(500).json({
      error: "Failed to fetch LeetCode stats. Please try again later.",
    });
  }
}
