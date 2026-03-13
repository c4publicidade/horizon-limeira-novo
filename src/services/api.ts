const API_URL = 'https://api.horizonlimeira.com.br/wp-json/leads/v1/create';
const API_KEY = 'minh4_ChAv3_sEcr3T4';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  lead_id?: number;
}

export const leadsAPI = {
  async create(data: LeadData): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_URL}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': API_KEY,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erro ao enviar formulário');
      }

      return await response.json();
    } catch (error) {
      console.error('Erro na API:', error);
      throw error;
    }
  },
};