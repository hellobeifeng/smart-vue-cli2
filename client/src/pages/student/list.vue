<template lang="html">
  <div class="list">
    <el-table :data="tableData" stripe header-row-class-name="tableHeader" empty-text="暂无数据" border style="width: 100%">
      <el-table-column fixed prop="name" label="学生" align="center"></el-table-column>
      <el-table-column label="性别" align="center">
        <template slot-scope="scope"> {{jungleSex(scope.row.sex)}} </template>
      </el-table-column>
      <el-table-column prop="address" label="家庭地址" align="center"></el-table-column>
      <el-table-column prop="teacher" label="归属教师编号" align="center"></el-table-column>
      <el-table-column label="操作" align="center" width="360">
        <template slot-scope="scope">
          <div>
            <el-button  size="small" type="primary" @click="toDetail(scope.row['_id'])">详情</el-button>
            <el-button  size="small" type="success" @click="modify(scope.row)">修改</el-button>
            <el-button type="danger" size="small" @click="deleteDate(scope.row['_id'])">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增数据 -->
    <el-dialog title="新增数据" :visible.sync="addFormVisible" class="addArea" modal custom-class="addFormArea">
      <el-form :model="addForm" class="addForm">
        <el-form-item label="学生姓名" :label-width="formLabelWidth">
          <el-input v-model="addForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属教师" :label-width="formLabelWidth">
          <el-input v-model="addForm.teacher" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="addForm.sex" placeholder="请选择性别" class="sexArea">
            <el-option label="汉子" :value="0"></el-option>
            <el-option label="妹子" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="addForm.address" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitNewStudent">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 修改数据 -->
    <el-dialog title="修改数据" :visible.sync="modifyFormVisible" class="addArea" modal custom-class="addFormArea">
      <el-form :model="modifyForm" class="addForm">
        <el-form-item label="学生姓名" :label-width="formLabelWidth">
          <el-input v-model="modifyForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属教师编号" :label-width="formLabelWidth">
          <el-input v-model="modifyForm.teacher" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="modifyForm.sex" placeholder="请选择性别" class="sexArea">
            <el-option label="男" :value="0"></el-option>
            <el-option label="女" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="家庭地址" :label-width="formLabelWidth">
          <el-input v-model="modifyForm.address" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modifyFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitModifyStudent">确 定</el-button>
      </div>
    </el-dialog>

    <el-button type="primary" class="addBtn" @click="add" icon="el-icon-plus">添加</el-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'studentlist',
  data: function () {
    return {
      title: '学生列表',
      addFormVisible: false,
      modifyFormVisible: false,
      addForm: {
        name: '',
        teacher: '',
        sex: '',
        address: ''
      },
      modifyForm: {
        name: '',
        sex: '',
        address: '',
        teacher: ''
      },
      formLabelWidth: '120px'
    }
  },
  computed: {
    ...mapState({
      tableData: state => state.st.list
    })
  },
  methods: {
    ...mapActions([
      'fetchStudentList',
      'addNewStudent',
      'modifyStudent',
      'deleteStudent'
    ]),
    jungleSex: function (sex) {
      if (sex === '0') {
        return '汉子'
      } else if (sex === '1') {
        return '妹子'
      } else {
        return ''
      }
    },
    // 新建
    add: function () {
      this.addFormVisible = true
    },
    submitNewStudent: function () {
      this.addFormVisible = false
      this.addNewStudent(this.addForm).then(() => {
        this.$message({ message: '添加成功', type: 'success' })
        this.clearAdd()
      }).catch(e => {
        this.$message({ message: '添加失败', type: 'error' })
      })
    },
    // 关闭dialog的函数
    clearAdd: function () {
      this.addFormVisible = false
      this.addForm.name = ''
      this.addForm.teacher = ''
      this.addForm.sex = ''
      this.addForm.address = ''
    },
    // 修改
    modify: function (row) {
      this.modifyFormVisible = true
      this.modifyForm = Object.assign({}, row)
      console.log('##modifyForm', this.modifyForm)
    },
    submitModifyStudent: function () {
      this.modifyStudent({ id: this.modifyForm._id, data: this.modifyForm }).then(() => {
        this.$message({ message: '修改成功', type: 'success' })
        this.modifyFormVisible = false
      }).catch(e => {
        this.modifyFormVisible = false
        this.$message({ message: '修改失败', type: 'error' })
      })
    },
    // 删除操作
    deleteDate: function (id) {
      var deleteId = id

      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteStudent({ id: deleteId }).then(() => {
          this.$message({ message: '删除成功', type: 'success' })
        }).catch(e => {
          this.$message({ message: '删除失败', type: 'error' })
        })
      }).catch(() => {
        this.$message({ type: 'info', message: '已取消删除' })
      })
    },
    // 跳转至详情页面
    toDetail: function (id) {
      this.$router.push({
        name: 'student-detail',
        query: {
          id: id
        }
      })
    }
  },
  mounted: function () {
    this.fetchStudentList().catch(e => console.log('ee', e))
  }
}
</script>

<style lang="css">
.tableHeader {
  color: #000;
}
div.list {
  width: 100%;
  margin: 0 auto;
}
.addBtn {
  margin: 50px auto 0;
  display: block;
}
.addArea .el-input {
  width: 200px;
}
.addPicArea .el-input {
  width: 500px;
}
.addForm {
  overflow: hidden;
}
.addForm .el-form-item {
  float: left;
}
.sexArea {
  width: 200px;
}
.addFormArea .el-dialog__header .el-dialog__title {
  text-align: left;
}
</style>
