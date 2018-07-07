<template>
         <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h2 class="sub-header">Hero List</h2>
          <router-link :to="{'name': 'addhero'}" tag="a" class="btn btn-success">添加</router-link>
          <!-- <a class="btn btn-success" href="add.html">Add</a> -->
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="item.id" v-for="(item, index) in list">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.gender }}</td>
                  <td>
                    <!-- <a href="edit.html">编辑</a> -->
                    <router-link :to="{ 'name': 'edit', params: { 'id': item.id } }">编辑</router-link>
                    &nbsp;&nbsp;
                    <!-- <a href="javascript:window.confirm('Are you sure?')">delete</a> -->
                    <a @click.prevent="handleDelData(item.id)">删除</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
</template>

<script>
// 导入axios模块
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.handleGetData();
  },
  methods: {
    handleGetData() {
      axios.get("http://localhost:3000/heroes").then(res => {
        console.log(res);
        const { status, data } = res;
        if (status === 200) {
          this.list = data;
        }
      });
    },
    handleDelData(id) {
      if (!confirm("确定删除吗")) {
        return;
      }
      //  `http://localhost:3000/heroes/${id}`
      axios.delete("http://localhost:3000/heroes/" + id).then(res => {
        // console.log(res);
        if (res.status === 200) {
          this.handleGetData();
        } else {
          alert("删除失败");
        }
      });
    }
  }
};
</script>

<style>
</style>
