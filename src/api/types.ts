import { Database } from "./database.types";

export type CourseRow = Database['public']['Tables']['Courses']['Row'];
export type CourseInsert = Database['public']['Tables']['Courses']['Insert'];
export type CourseUpdate = Database['public']['Tables']['Courses']['Update'];


export type HoleRow = Database['public']['Tables']['Holes']['Row'] & { tee?: Partial<TeeRow> };
export type HoleInsert = Database['public']['Tables']['Holes']['Insert'];
export type HoleUpdate = Database['public']['Tables']['Holes']['Update'];

export type LeagueRow = Database['public']['Tables']['Leagues']['Row'] & { Courses?: Partial<CourseRow> | Partial<CourseRow>[] | null };
export type LeagueInsert = Database['public']['Tables']['Leagues']['Insert'];
export type LeagueUpdate = Database['public']['Tables']['Leagues']['Update'];


export type MatchRow = Database['public']['Tables']['Matches']['Row'] & { league?: Partial<LeagueRow> };
export type MatchInsert = Database['public']['Tables']['Matches']['Insert'];
export type MatchUpdate = Database['public']['Tables']['Matches']['Update'];


export type PlayerMatchRow = Database['public']['Tables']['PlayerMatches']['Row'] & { match?: Partial<MatchRow>, player?: Partial<PlayerRow> };
export type PlayerMatchInsert = Database['public']['Tables']['PlayerMatches']['Insert'];
export type PlayerMatchUpdate = Database['public']['Tables']['PlayerMatches']['Update'];


export type PlayerRow = Database['public']['Tables']['Players']['Row'] & { tee?: Partial<TeeRow> };
export type PlayerInsert = Database['public']['Tables']['Players']['Insert'];
export type PlayerUpdate = Database['public']['Tables']['Players']['Update'];


export type TeeRow = Database['public']['Tables']['Tees']['Row'] & {course?: Partial<CourseRow> };
export type TeeInsert = Database['public']['Tables']['Tees']['Insert'];
export type TeeUpdate = Database['public']['Tables']['Tees']['Update'];

