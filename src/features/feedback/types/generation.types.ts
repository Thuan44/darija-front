type GenerateFeedbackRequest = FormData;

type GenerateFeedbackResponse = {
  analysis: object
  transcribed_text: string;
};

export type { GenerateFeedbackRequest, GenerateFeedbackResponse };
