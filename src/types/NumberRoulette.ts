export interface NumberRouletteI {
  id?: string | number;
  rouletteId?: string | number;
  userId?: string | number;
  sessionId?: string | number;
  valueNumber: number;
}

export interface NumberRouletteInputI {
  id?: string | number;
  rouletteId?: string | number;
  userId?: string | number;
  sessionId?: string | number;
  valueNumber: number | string;
}
