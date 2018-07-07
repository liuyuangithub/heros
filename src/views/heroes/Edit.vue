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
          <button @click.prevent="handleEdit" type="submit" class="btn btn-success">提交</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      FormData: {
        name: "",
        gender: ""
      },
      paramsId: -1
    };
  },
  created() {
    this.paramsId = this.$route.params.id;
    this.handleAddList();
  },
  methods: {
    handleAddList() {
      axios
        .get(`http://localhost:3000/heroes/${this.paramsId}`)
        .then(res => {
          if (res.status === 200) {
            this.FormData = res.data;
          }
        })
        .catch(err => console.log(err));
    },
    handleEdit() {
      axios
        .put(`http://localhost:3000/heroes/${this.paramsId}`, this.FormData)
        .then(res => {
          const { data, status } = res;
          if (status === 200) {
            alert("编辑成功");
            this.$router.push({ name: "heroes" });
          } else {
            alert("编辑失败");
            this.handleAddList();
          }
        });
    }
  }
};
</script>

<style>
</style>

