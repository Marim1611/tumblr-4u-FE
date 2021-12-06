<template>
  <p>{{ message }}</p>
</template>

<script>
import { fetchMessage } from '@/services/fetchers'

export default {
  data() {
    return {
      message: ''
    }
  },
  async created() {
    try {
      this.message = await fetchMessage()
    }
    catch(error){
      this.message = 'server error :('
    }
  }
}
</script>