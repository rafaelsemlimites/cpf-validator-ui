import { ref } from 'vue'
import { validateCpf } from '../services/cpfService' // Implementa a interface ICpfValidatorService

/**
 * Composable que encapsula a lógica de validação de CPF.
 * Pode ser reutilizado em qualquer componente.
 */
export function useCpfValidator() {
  const cpf = ref('')
  const loading = ref(false)
  const result = ref({ isValid: false, message: '' })

  /**
   * Valida o CPF usando o serviço e atualiza os estados reativos.
   */
  const validate = async () => {
    const trimmed = cpf.value?.trim()

    if (!trimmed) {
      result.value = {
        isValid: false,
        message: 'O CPF é obrigatório.'
      }
      return
    }

    loading.value = true

    try {
      result.value = await validateCpf(trimmed)
    } catch (error) {
      result.value = {
        isValid: false,
        message: error?.response?.data?.message || 'Erro inesperado ao validar CPF.'
      }
    } finally {
      loading.value = false
    }
  }

  return {
    cpf,
    loading,
    result,
    validate
  }
}
