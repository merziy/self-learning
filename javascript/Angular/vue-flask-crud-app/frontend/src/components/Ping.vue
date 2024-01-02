<template>
  <div class="container">
    <button type="button" class="btn btn-primary">
      {{ msg }}
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Ping',
  data() {
    return {
      msg: 'Hello',
    };
  },
  methods: {
    getMessage() {
      const path = 'http://127.0.0.1:5000/ping';
      axios.get(path)
        .then((res) => {
          // When a response is returned from the back-end, we set
          // the msg value to the value of data from the response
          // object
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>
