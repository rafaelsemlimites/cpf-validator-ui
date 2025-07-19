<template>
  <v-container
    class="d-flex justify-center align-center fill-height"
    style="background-color: #f9f9f9;"
  >
    <v-card class="pa-6" width="100%" style="max-width: 700px;" elevation="6" rounded>
      <v-card-title class="justify-center text-h6 font-weight-bold">
        Validação de CPF
      </v-card-title>

      <v-card-text>
        <v-text-field
          v-model="cpf"
          label="Digite o CPF"
          maxlength="14"
          prepend-icon="mdi-account"
          variant="outlined"
          color="primary"
          hide-details="auto"
          @input="formatCpf"
        />

        <v-btn
          color="primary"
          class="mt-4"
          @click="validate"
          :loading="loading"
          block
        >
          Validar CPF
        </v-btn>

        <v-alert
          v-if="result.message"
          :type="result.isValid ? 'success' : 'error'"
          class="mt-4"
          dense
        >
          {{ result.message }}
        </v-alert>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
// Component responsável por abstrair a lógica de validação
import { useCpfValidator } from '@/components/useCpfValidator'
const { cpf, result, loading, validate } = useCpfValidator()

function formatCpf(event) {
  let value = event.target.value.replace(/\D/g, '') // Remove não numéricos

  // Aplica a máscara
  if (value.length > 3) value = value.replace(/^(\d{3})(\d)/, '$1.$2')
  if (value.length > 6) value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
  if (value.length > 9) value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4')

  cpf.value = value
}
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}
</style>
