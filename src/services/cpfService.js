// src/services/cpfService.js

import { httpClient } from './httpClient'

/**
 * @implements {import('../interfaces/ICpfValidatorService')}
 */

/**
 * Valida um CPF utilizando a API backend.
 *
 * @param {string} cpf - CPF no formato 000.000.000-00 ou apenas números
 * @returns {Promise<import('../interfaces/CpfResponse').CpfResponse>}
 */
export async function validateCpf(cpf) {
  try {
    const { data } = await httpClient.post('cpf/validate', { cpf })

    // Garante estrutura esperada mesmo que a API mude
    return {
      isValid: !!data?.isValid,
      message: data?.message || 'Resposta da API não informada'
    }
  } catch (error) {
    console.error('[CpfService] Erro ao validar CPF:', error)

    return {
      isValid: false,
      message:
        error?.response?.data?.message ||
        'Erro de conexão com o servidor. Tente novamente.'
    }
  }
}
