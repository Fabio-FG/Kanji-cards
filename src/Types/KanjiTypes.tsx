export interface KanjiTypes {
    grade?: string | null;
    kanji: string;
    meanings?: [];
    readings?: [];
    on_readings?: [];
    kun_readings?: [];
    name_readings?: [];
    jlpt?: string | null;
    heisig_en?: string | null;
    stroke_count?: number;
    unicode?: string;
  }