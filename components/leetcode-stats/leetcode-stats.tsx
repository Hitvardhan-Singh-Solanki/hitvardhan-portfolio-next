"use client";

import { useEffect, useState } from "react";
import "./leetcode-stats.scss";
import { useStaggerAnimation } from "@/lib/hooks/animations";
import { useHoverAnimation } from "@/lib/hooks/animations";

export interface LeetCodeStats {
  username: string;
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

export default function LeetCodeStats({ username }: { username: string }) {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useStaggerAnimation({ stagger: 0.2 });
  const cardAnimation = useHoverAnimation({
    scale: 1.02,
    y: -4,
    duration: 0.3,
  });

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/leetcode?username=${username}`);

        if (!response.ok) {
          throw new Error("Failed to fetch LeetCode stats");
        }

        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching LeetCode stats:", err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchLeetCodeStats();
    }
  }, [username]);

  if (loading) {
    return (
      <div className="leetcode-stats-container">
        <div className="leetcode-header">
          <div className="leetcode-icon-wrapper">
            <svg
              className="leetcode-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z"
                fill="currentColor"
              />
              <path
                d="M17.773 11.547a1.002 1.002 0 0 1 1.376.322c.228.358.127.838-.226 1.068l-6.396 4.154a1.002 1.002 0 0 1-1.376-.322 1.002 1.002 0 0 1 .226-1.068l6.396-4.154z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="leetcode-title">LeetCode Stats</h2>
        </div>
        <div className="leetcode-loading">
          <div className="spinner"></div>
          <p>Loading stats...</p>
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="leetcode-stats-container">
        <div className="leetcode-header">
          <div className="leetcode-icon-wrapper">
            <svg
              className="leetcode-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z"
                fill="currentColor"
              />
              <path
                d="M17.773 11.547a1.002 1.002 0 0 1 1.376.322c.228.358.127.838-.226 1.068l-6.396 4.154a1.002 1.002 0 0 1-1.376-.322 1.002 1.002 0 0 1 .226-1.068l6.396-4.154z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="leetcode-title">LeetCode Stats</h2>
        </div>
        <div className="leetcode-error">
          <p>{error || "Unable to load stats"}</p>
        </div>
      </div>
    );
  }

  const easyTotal = 800; // Approximate totals (these change over time)
  const mediumTotal = 1700;
  const hardTotal = 750;

  const easyPercent = (stats.easySolved / easyTotal) * 100;
  const mediumPercent = (stats.mediumSolved / mediumTotal) * 100;
  const hardPercent = (stats.hardSolved / hardTotal) * 100;
  const totalPercent = (stats.totalSolved / stats.totalQuestions) * 100;

  return (
    <div
      ref={cardAnimation.elementRef as unknown as React.RefObject<HTMLDivElement>}
      onMouseEnter={cardAnimation.handleMouseEnter}
      onMouseLeave={cardAnimation.handleMouseLeave}
      className="leetcode-stats-container"
    >
      {/* Header */}
      <div className="leetcode-header stagger-item">
        <div className="leetcode-icon-wrapper">
          <svg
            className="leetcode-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z"
              fill="currentColor"
            />
            <path
              d="M17.773 11.547a1.002 1.002 0 0 1 1.376.322c.228.358.127.838-.226 1.068l-6.396 4.154a1.002 1.002 0 0 1-1.376-.322 1.002 1.002 0 0 1 .226-1.068l6.396-4.154z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div>
          <h2 className="leetcode-title">LeetCode Stats</h2>
          <p className="leetcode-username">@{stats.username}</p>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="leetcode-stats-grid">
        {/* Total Solved */}
        <div className="leetcode-stat-card highlight-card stagger-item">
          <div className="stat-header">
            <span className="stat-label">Total Solved</span>
            <span className="stat-percentage">{totalPercent.toFixed(1)}%</span>
          </div>
          <div className="stat-value-large">
            {stats.totalSolved}
            <span className="stat-total">/{stats.totalQuestions}</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill total"
              style={{ width: `${totalPercent}%` }}
            />
          </div>
        </div>

        {/* Easy */}
        <div className="leetcode-stat-card stagger-item">
          <div className="difficulty-badge easy">Easy</div>
          <div className="stat-value">
            {stats.easySolved}
            <span className="stat-small">/{easyTotal}</span>
          </div>
          <div className="progress-bar small">
            <div
              className="progress-fill easy"
              style={{ width: `${easyPercent}%` }}
            />
          </div>
          <span className="stat-percentage">{easyPercent.toFixed(1)}%</span>
        </div>

        {/* Medium */}
        <div className="leetcode-stat-card stagger-item">
          <div className="difficulty-badge medium">Medium</div>
          <div className="stat-value">
            {stats.mediumSolved}
            <span className="stat-small">/{mediumTotal}</span>
          </div>
          <div className="progress-bar small">
            <div
              className="progress-fill medium"
              style={{ width: `${mediumPercent}%` }}
            />
          </div>
          <span className="stat-percentage">{mediumPercent.toFixed(1)}%</span>
        </div>

        {/* Hard */}
        <div className="leetcode-stat-card stagger-item">
          <div className="difficulty-badge hard">Hard</div>
          <div className="stat-value">
            {stats.hardSolved}
            <span className="stat-small">/{hardTotal}</span>
          </div>
          <div className="progress-bar small">
            <div
              className="progress-fill hard"
              style={{ width: `${hardPercent}%` }}
            />
          </div>
          <span className="stat-percentage">{hardPercent.toFixed(1)}%</span>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="leetcode-additional-stats stagger-item">
        <div className="additional-stat">
          <span className="additional-stat-label">Acceptance Rate</span>
          <span className="additional-stat-value">
            {stats.acceptanceRate.toFixed(1)}%
          </span>
        </div>
        <div className="additional-stat">
          <span className="additional-stat-label">Global Ranking</span>
          <span className="additional-stat-value">
            {stats.ranking.toLocaleString()}
          </span>
        </div>
        <div className="additional-stat">
          <span className="additional-stat-label">Contribution Points</span>
          <span className="additional-stat-value">
            {stats.contributionPoints.toLocaleString()}
          </span>
        </div>
        <div className="additional-stat">
          <span className="additional-stat-label">Reputation</span>
          <span className="additional-stat-value">
            {stats.reputation.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
