import { supabase } from "@/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";

interface Blog {
  id: number;
  title: string;
  content: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data, error } = await supabase
      .from<Blog>("blogs")
      .select("*")
      .order("id", { ascending: false });

    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  }
}
