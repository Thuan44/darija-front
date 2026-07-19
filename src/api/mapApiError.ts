import { ApiError } from "./errors";

export function mapApiError(error: unknown): string {
    if (error instanceof ApiError) {
        if (error.status === 400) {
            return "La requête est invalide. Veuillez vérifier les informations saisies.";
        }
        if (error.status === 401) {
            return "Vous n'êtes pas autorisé à effectuer cette action. Veuillez vous connecter.";
        }
        if (error.status === 403) {
            return "Accès refusé. Vous n'avez pas les droits nécessaires pour cette action.";
        }
        if (error.status === 404) {
            return "La ressource demandée est introuvable.";
        }
        if (error.status >= 400 && error.status < 500) {
            return "Une erreur s'est produite lors de la requête. Veuillez vérifier les données saisies.";
        }
        if (error.status >= 500) {
            return "Le serveur est temporairement indisponible. Merci de réessayer plus tard.";
        }
    }
    if (error instanceof Error) {
        return error.message || "Une erreur inconnue est survenue.";
    }
    return "Une erreur inattendue s'est produite. Veuillez réessayer.";
}