type FeedbackError = {
  mot: string;
  type: string;
  detail: string;
};

type FeedbackAnalysis = {
  score_global: number;
  fluidite: number;
  prononciation: number;
  fidelite_texte: number;
  points_forts: string[];
  erreurs: FeedbackError[];
  conseils: string[];
};

type GenerateFeedbackRequest = FormData;

type GenerateFeedbackResponse = {
  analysis: FeedbackAnalysis;
  transcribed_text: string;
};

export type {
  FeedbackAnalysis,
  FeedbackError,
  GenerateFeedbackRequest,
  GenerateFeedbackResponse,
};
