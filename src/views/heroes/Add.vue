<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input type="text" class="form-control" v-model="FormData.name" id="name" placeholder="名称">
          </div>
          <div class="form-group">
            <label for="gender">英雄性别</label>
            <input type="text" class="form-control" v-model="FormData.gender" id="gender" placeholder="性别">
          </div>
          <button @click="handlerAdd" type="submit" class="btn btn-success">提交</button>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      FormData: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    handlerAdd() {
      this.$http.post(`/heroes`, this.FormData).then(res => {
        if (res.status === 201) {
          this.$router.push({ name: "heroes" });
        } else {
          alert("添加失败");
        }
      });
    }
  }
};
</script>

<style>
</style>

