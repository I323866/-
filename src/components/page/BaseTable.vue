<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          ><i class="el-icon-menu"></i> 表格</el-breadcrumb-item
        >
        <el-breadcrumb-item>人员信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="handle-box">
      <el-input
        v-model="select_word"
        placeholder="筛选名字"
        class="handle-input mr10"
      ></el-input>
      <el-button type="primary" icon="search" @click="search">搜索</el-button>
      <span>
        <el-button v-if="level > 1" type="primary" @click="handleAdd"
          >新增</el-button
        >
      </span>
      <download-excel
        class="downloadexcel"
        :data="tableData"
        :fields="json_fields"
        worksheet="My Worksheet"
        name="人员信息.xls"
      >
        <button class="el-button el-button--primary">下载</button>
      </download-excel>
    </div>
    <el-table :data="tableData" border style="width: 100%" ref="multipleTable">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="phone" label="手机号码"> </el-table-column>
      <el-table-column prop="department" label="所在部门"> </el-table-column>
      <el-table-column label="操作" width="180">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <span v-if="level > 1">
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </span>
        </template>
      </el-table-column>
    </el-table>

    <!--编辑界面-->
    <el-dialog
      title="编辑"
      v-model="editFormVisible"
      :close-on-click-modal="false"
    >
      <el-form
        :model="editForm"
        label-width="80px"
        :rules="editFormRules"
        ref="editForm"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="ip">
          <el-input v-model="editForm.ip"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" prop="birthday">
          <el-date-picker
            v-model="editForm.birthday"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="政治面貌" prop="politics">
          <el-input v-model="editForm.politics"></el-input>
        </el-form-item>
        <el-form-item label="籍贯" prop="natvie">
          <el-input v-model="editForm.natvie"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="editForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址" prop="address">
          <el-input v-model="editForm.address"></el-input>
        </el-form-item>
        <el-form-item label="行政职务" prop="executeiveposition">
          <el-input v-model="editForm.executeiveposition"></el-input>
        </el-form-item>
        <el-form-item label="技术职务" prop="technicalposition">
          <el-input v-model="editForm.technicalposition"></el-input>
        </el-form-item>
        <el-form-item label="入职时间" prop="hiredate">
          <el-date-picker
            v-model="editForm.hiredate"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="教育程度" prop="education">
          <el-input v-model="editForm.education"></el-input>
        </el-form-item>
        <el-form-item label="毕业院校" prop="school">
          <el-input v-model="editForm.school"></el-input>
        </el-form-item>
        <el-form-item label="车牌号" prop="carnumber">
          <el-input v-model="editForm.carnumber"></el-input>
        </el-form-item>
        <el-form-item label="工作区域" prop="workarea">
          <el-input v-model="editForm.workarea"></el-input>
        </el-form-item>
        <el-form-item label="所在部门" prop="department">
          <el-select v-model="editForm.department" placeholder="请选择部门">
            <el-option label="气象中心领导" value="气象中心领导"></el-option>
            <el-option label="综合办公室" value="综合办公室"></el-option>
            <el-option label="综合业务室" value="综合业务室"></el-option>
            <el-option label="安全管理室" value="安全管理室"></el-option>
            <el-option label="气象技术室" value="气象技术室"></el-option>
            <el-option label="虹桥气象台" value="虹桥气象台"></el-option>
            <el-option label="区域预报室" value="区域预报室"></el-option>
            <el-option label="气象资料室" value="气象资料室"></el-option>
            <el-option label="气象情报室" value="气象情报室"></el-option>
            <el-option label="气象信息室" value="气象信息室"></el-option>
            <el-option
              label="气象技术装备室"
              value="气象技术装备室"
            ></el-option>
            <el-option label="浦东气象台" value="浦东气象台"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="执照" prop="zhizhao">
          <el-row>
            <el-col>
              <el-table
                size="mini"
                :data="license.data"
                border
                style="width: 100%"
                highlight-current-row
              >
                <el-table-column type="index"></el-table-column>
                <el-table-column prop="name" label="执照名称" align="center">
                  <template scope="scope">
                    <el-input v-model="scope.row.name"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="date" label="获得日期" align="center">
                  <template scope="scope">
                    <el-date-picker
                      v-model="scope.row.date"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="validityfrom"
                  label="有效期起始日期"
                  align="center"
                >
                  <template scope="scope">
                    <el-date-picker
                      v-model="scope.row.validityfrom"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="validityto"
                  label="有效期截止日期"
                  align="center"
                >
                  <template scope="scope">
                    <el-date-picker
                      v-model="scope.row.validityto"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </template>
                </el-table-column>
                <el-table-column prop="name" label="有效期预警" align="center">
                  <template scope="scope">
                    <el-input
                      disabled
                      v-model="scope.row.validitywarning"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="100">
                  <template scope="scope">
                    <span
                      class="el-tag el-tag--danger el-tag--mini"
                      style="cursor: pointer"
                      @click="licenseDelete(scope.row, scope.$index)"
                    >
                      删除
                    </span>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
            <el-col>
              <div
                class="el-table-add-row"
                style="width: 99.2%"
                @click="addLicense()"
              >
                <span>+ 添加</span>
              </div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="子女" prop="zinv">
          <el-row>
            <el-col>
              <el-table
                size="mini"
                :data="children.data"
                border
                style="width: 100%"
                highlight-current-row
              >
                <el-table-column type="index"></el-table-column>
                <el-table-column
                  prop="childname"
                  label="子女姓名"
                  align="center"
                >
                  <template scope="scope">
                    <el-input v-model="scope.row.childname"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="sex" label="性别" align="center">
                  <template scope="scope">
                    <el-select v-model="scope.row.sex" placeholder="请选择性别">
                      <el-option label="男" value="男"></el-option>
                      <el-option label="女" value="女"></el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="birthday"
                  label="出生年月"
                  align="center"
                >
                  <template scope="scope">
                    <el-date-picker
                      v-model="scope.row.birthday"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="100">
                  <template scope="scope">
                    <span
                      class="el-tag el-tag--danger el-tag--mini"
                      style="cursor: pointer"
                      @click="childrenDelete(scope.row, scope.$index, false)"
                    >
                      删除
                    </span>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
            <el-col>
              <div
                class="el-table-add-row"
                style="width: 99.2%"
                @click="addChildren()"
              >
                <span>+ 添加</span>
              </div>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          @click.native="
            (editFormVisible = false), (children.data = []), (license.data = [])
          "
          >取消</el-button
        >
        <el-button
          type="primary"
          @click.native="editSubmit"
          :loading="editLoading"
          >提交</el-button
        >
      </div>
    </el-dialog>

    <!--新增界面-->
    <el-dialog
      title="新增"
      v-model="addFormVisible"
      :close-on-click-modal="false"
    >
      <el-form
        :model="addForm"
        label-width="80px"
        :rules="addFormRules"
        ref="addForm"
      >
        <div>密码和id一样</div>

        <el-form-item label="id" prop="id">
          <el-input v-model="addForm.id"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="ip">
          <el-input v-model="addForm.ip"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" prop="birthday">
          <el-date-picker
            v-model="addForm.birthday"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="政治面貌" prop="politics">
          <el-input v-model="addForm.politics"></el-input>
        </el-form-item>
        <el-form-item label="籍贯" prop="natvie">
          <el-input v-model="addForm.natvie"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="addForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址" prop="address">
          <el-input v-model="addForm.address"></el-input>
        </el-form-item>
        <el-form-item label="行政职务" prop="executeiveposition">
          <el-input v-model="addForm.executeiveposition"></el-input>
        </el-form-item>
        <el-form-item label="技术职务" prop="technicalposition">
          <el-input v-model="addForm.technicalposition"></el-input>
        </el-form-item>
        <el-form-item label="入职时间" prop="hiredate">
          <el-date-picker
            v-model="addForm.hiredate"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="教育程度" prop="education">
          <el-input v-model="addForm.education"></el-input>
        </el-form-item>
        <el-form-item label="毕业院校" prop="school">
          <el-input v-model="addForm.school"></el-input>
        </el-form-item>
        <el-form-item label="车牌号" prop="carnumber">
          <el-input v-model="addForm.carnumber"></el-input>
        </el-form-item>
        <el-form-item label="工作区域" prop="workarea">
          <el-input v-model="addForm.workarea"></el-input>
        </el-form-item>
        <el-form-item label="所在部门" prop="department">
          <el-select v-model="addForm.department" placeholder="请选择部门">
            <el-option label="气象中心领导" value="气象中心领导"></el-option>
            <el-option label="综合办公室" value="综合办公室"></el-option>
            <el-option label="综合业务室" value="综合业务室"></el-option>
            <el-option label="安全管理室" value="安全管理室"></el-option>
            <el-option label="气象技术室" value="气象技术室"></el-option>
            <el-option label="虹桥气象台" value="虹桥气象台"></el-option>
            <el-option label="区域预报室" value="区域预报室"></el-option>
            <el-option label="气象资料室" value="气象资料室"></el-option>
            <el-option label="气象情报室" value="气象情报室"></el-option>
            <el-option label="气象信息室" value="气象信息室"></el-option>
            <el-option
              label="气象技术装备室"
              value="气象技术装备室"
            ></el-option>
            <el-option label="浦东气象台" value="浦东气象台"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="执照" prop="zhizhao">
          <el-row>
            <el-col>
              <el-table
                size="mini"
                :data="license.data"
                border
                style="width: 100%"
                highlight-current-row
              >
                <el-table-column type="index"></el-table-column>
                <el-table-column prop="name" label="执照名称" align="center">
                  <template scope="scope">
                    <el-input v-model="scope.row.name"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="date" label="获得日期" align="center">
                  <template scope="scope">
                    <el-date-picker
                      v-model="scope.row.date"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="validityfrom"
                  label="有效期起始日期"
                  align="center"
                >
                  <template scope="scope">
                    <el-date-picker
                      v-model="scope.row.validityfrom"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="validityto"
                  label="有效期截止日期"
                  align="center"
                >
                  <template scope="scope">
                    <el-date-picker
                      v-model="scope.row.validityto"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </template>
                </el-table-column>
                <el-table-column prop="name" label="有效期预警" align="center">
                  <template scope="scope">
                    <el-input
                      disabled
                      v-model="scope.row.validitywarning"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="100">
                  <template scope="scope">
                    <span
                      class="el-tag el-tag--danger el-tag--mini"
                      style="cursor: pointer"
                      @click="licenseDelete(scope.row, scope.$index)"
                    >
                      删除
                    </span>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
            <el-col>
              <div
                class="el-table-add-row"
                style="width: 99.2%"
                @click="addLicense()"
              >
                <span>+ 添加</span>
              </div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="子女" prop="zinv">
          <el-row>
            <el-col>
              <el-table
                size="mini"
                :data="children.data"
                border
                style="width: 100%"
                highlight-current-row
              >
                <el-table-column type="index"></el-table-column>
                <el-table-column
                  prop="childname"
                  label="子女姓名"
                  align="center"
                >
                  <template scope="scope">
                    <el-input v-model="scope.row.childname"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="sex" label="性别" align="center">
                  <template scope="scope">
                    <el-select v-model="scope.row.sex" placeholder="请选择性别">
                      <el-option label="男" value="男"></el-option>
                      <el-option label="女" value="女"></el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="birthday"
                  label="出生年月"
                  align="center"
                >
                  <template scope="scope">
                    <el-date-picker
                      v-model="scope.row.birthday"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="100">
                  <template scope="scope">
                    <span
                      class="el-tag el-tag--danger el-tag--mini"
                      style="cursor: pointer"
                      @click="childrenDelete(scope.row, scope.$index, false)"
                    >
                      删除
                    </span>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
            <el-col>
              <div
                class="el-table-add-row"
                style="width: 99.2%"
                @click="addChildren()"
              >
                <span>+ 添加</span>
              </div>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          @click.native="
            (addFormVisible = false), (children.data = []), (license.data = [])
          "
          >取消</el-button
        >
        <el-button
          type="primary"
          @click.native="addSubmit"
          :loading="addLoading"
          >提交</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getLicneseById,
  getChildrenById,
  editUser,
  addUser,
  addChildren,
  addLicense,
  deleteUser,
} from "../../api/api";
import _ from "lodash";
export default {
  data() {
    return {
      json_fields: {
        //表头设计
        姓名: "name",
        身份证: "ip",
        出生日期: "birthday",
        政治面貌: "politics",
        籍贯: "natvie",
        手机号码: "phone",
        家庭住址: "address",
        行政职务: "executeiveposition",
        技术职务: "technicalposition",
        入职时间: "hiredate",
        教育程度: "education",
        毕业院校: "school",
        车牌号: "carnumber",
        工作区域: "workarea",
        所在部门: "department",
      },
      url: "./static/vuetable.json",
      tableData: [],
      cur_page: 1,
      multipleSelection: [],
      select_cate: "",
      select_word: "",
      del_list: [],
      is_search: false,
      editFormVisible: false, //编辑界面是否显示
      //编辑界面数据
      editForm: {
        id: "",
        name: "",
        ip: "",
        birthday: new Date(),
        politics: "",
        natvie: "",
        address: "",
        executeiveposition: "",
        technicalposition: "",
        hiredate: new Date(),
        education: "",
        carnumber: "",
        workarea: "",
        department: "",
      },
      editFormRules: {
        id: [{ required: true, message: "请输入ID", trigger: "blur" }],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        ip: [{ required: true, message: "请输入身份证", trigger: "blur" }],
        politics: [
          { required: true, message: "请输入政治面貌", trigger: "blur" },
        ],
        natvie: [{ required: true, message: "请输入籍贯", trigger: "blur" }],
        phone: [{ required: true, message: "请输入手机号码", trigger: "blur" }],
        address: [
          { required: true, message: "请输入家庭住址", trigger: "blur" },
        ],
        executeiveposition: [
          { required: true, message: "请输入行政职务", trigger: "blur" },
        ],
        technicalposition: [
          { required: true, message: "请输入技术职务", trigger: "blur" },
        ],
        education: [
          { required: true, message: "请输入教育程度", trigger: "blur" },
        ],
        school: [
          { required: true, message: "请输入毕业院校", trigger: "blur" },
        ],
        department: [
          { required: true, message: "请输入所在部门", trigger: "blur" },
        ],
        workarea: [
          { required: true, message: "请输入工作区域", trigger: "blur" },
        ],
      },
      editLoading: false,
      addFormVisible: false, //新增界面是否显示
      addLoading: false,
      addFormRules: {
        id: [{ required: true, message: "请输入ID", trigger: "blur" }],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        ip: [{ required: true, message: "请输入身份证", trigger: "blur" }],
        politics: [
          { required: true, message: "请输入政治面貌", trigger: "blur" },
        ],
        natvie: [{ required: true, message: "请输入籍贯", trigger: "blur" }],
        phone: [{ required: true, message: "请输入手机号码", trigger: "blur" }],
        address: [
          { required: true, message: "请输入家庭住址", trigger: "blur" },
        ],
        executeiveposition: [
          { required: true, message: "请输入行政职务", trigger: "blur" },
        ],
        technicalposition: [
          { required: true, message: "请输入技术职务", trigger: "blur" },
        ],
        education: [
          { required: true, message: "请输入教育程度", trigger: "blur" },
        ],
        school: [
          { required: true, message: "请输入毕业院校", trigger: "blur" },
        ],
        department: [
          { required: true, message: "请输入所在部门", trigger: "blur" },
        ],
        workarea: [
          { required: true, message: "请输入工作区域", trigger: "blur" },
        ],
      },
      //新增界面数据
      addForm: {
        id: "",
        name: "",
        ip: "",
        birthda: new Date(),
        politics: "",
        natvie: "",
        address: "",
        executeiveposition: "",
        technicalposition: "",
        hiredate: "",
        education: "",
        carnumber: "",
        workarea: "",
        department: "",
        password: "",
      },
      license: {
        // sel: null, //选中行
        // columns: [
        //   { field: "name", title: "执照名称", width: 120 },
        //   { field: "date", title: "获得日期", width: 150 },
        //   { field: "validityfrom", title: "有效期起始日期", width: 120 },
        //   { field: "validityto", title: "有效期截止日期", width: 220 },
        //   { field: "validitywarning", title: "有效期预警" },
        // ],
        data: [],
      },
      children: {
        // sel: null, //选中行
        // columns: [
        //   { field: "childname", title: "子女姓名", width: 120 },
        //   { field: "sex", title: "性别", width: 150 },
        //   { field: "birthday", title: "出生年月", width: 120 },
        // ],
        data: [],
      },
    };
  },
  created() {
    this.getUsers();
  },
  computed: {
    data() {
      const self = this;
      return self.tableData;
    },
    level() {
      return localStorage.getItem("ms_level");
    },
  },
  methods: {
    // handleCurrentChange(val) {
    //   this.cur_page = val;
    //   this.getUsers();
    // },
    getUsers() {
      let self = this;
      let username = localStorage.getItem("ms_username");
      this.$axios
        .get(
          `http://localhost:3000/api/userlistbydeperartment?user=${username}`,
          { page: self.cur_page }
        )
        .then((res) => {
          this.tableData = res.data.data;
        });
    },
    search() {
      const keyword = this.select_word;
      if (keyword != undefined && keyword != "") {
        this.tableData = this.tableData.filter((o) => {
          return o.name.includes(keyword);
        });
      } else {
        this.getUsers();
      }

      this.is_search = true;
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    //显示编辑界面
    async handleEdit(index, row) {
      this.editFormVisible = true;
      this.license.data = await getLicneseById(row.id);
      this.children.data = await getChildrenById(row.id);
      this.editForm = Object.assign({}, row);
    },
    //显示新增界面
    handleAdd() {
      this.addFormVisible = true;
      this.addForm = {
        id: "",
        name: "",
        ip: "",
        birthday: new Date(),
        politics: "",
        natvie: "",
        address: "",
        executeiveposition: "",
        technicalposition: "",
        hiredate: new Date(),
        education: "",
        carnumber: "",
        workarea: "",
        department: "",
      };
    },
    // handleDownload() {
    //   var blob = new Blob(["\ufeff" + content], {
    //     type: "text/csv,charset=UTF-8",
    //   });
    //   openDownloadDialog(blob, "test");
    // },
    // openDownloadDialog(url, fileName) {
    //   if (typeof url === "object" && url instanceof Blob) {
    //     url = URL.createObjectURL(url); // 创建blob地址
    //   }
    //   const aLink = document.createElement("a");
    //   aLink.href = url;
    //   aLink.download = fileName;
    //   aLink.click();
    // },

    handleDelete(index, row) {
      deleteUser({ id: row.id });
      this.getUsers();
    },
    // delAll() {
    //   const self = this,
    //     length = self.multipleSelection.length;
    //   let str = "";
    //   self.del_list = self.del_list.concat(self.multipleSelection);
    //   for (let i = 0; i < length; i++) {
    //     str += self.multipleSelection[i].name + " ";
    //   }
    //   self.$message.error("删除了" + str);
    //   self.multipleSelection = [];
    // },
    // handleSelectionChange(val) {
    //   this.multipleSelection = val;
    // },
    //编辑
    editSubmit: function () {
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.editLoading = true;
            //NProgress.start();
            let para = Object.assign({}, this.editForm);
            editUser(para).then((res) => {
              this.editLoading = false;

              this.$message({
                message: "提交成功",
                type: "success",
              });
              this.$refs["editForm"].resetFields();
              this.editFormVisible = false;
              this.getUsers();
            });

            if (this.children.data.length > 0) {
              let addChildrenData = Object.assign({}, this.children.data);
              addChildren({ id: addChildrenData[0].id, data: addChildrenData });
            }

            if (this.license.data.length > 0) {
              let addLicenseData = Object.assign({}, this.license.data);
              addLicense({ id: addLicenseData[0].id, data: addLicenseData });
            }
            this.license.data = [];
            this.children.data = [];
          });
        }
      });
    },
    addSubmit: function () {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.addLoading = true;
            let para = Object.assign({}, this.addForm);
            addUser(para).then((res) => {
              this.addLoading = false;
              //NProgress.done();
              this.$message({
                message: "提交成功",
                type: "success",
              });
              this.$refs["addForm"].resetFields();
              this.addFormVisible = false;
              this.getUsers();
            });
            if (this.children.data.length > 0) {
              let addChildrenData = Object.assign({}, this.children.data);
              addChildren({ id: addChildrenData[0].id, data: addChildrenData });
            }

            if (this.license.data.length > 0) {
              let addLicenseData = Object.assign({}, this.license.data);
              addLicense({ id: addLicenseData[0].id, data: addLicenseData });
            }
            this.license.data = [];
            this.children.data = [];
          });
        }
      });
    },
    // 删除行
    licenseDelete(row, index) {
      this.license.data.splice(index, 1);
    },

    //添加账号
    addLicense() {
      let j = {
        id: this.editForm.id || this.addForm.id,
        name: "",
        date: "",
        validityfrom: "",
        validityto: "",
        validitywarning: "",
        isSet: true,
        _temporary: true,
      };
      console.log(this.license.data);
      this.license.data.push(j);
      // this.license.sel = j;
    },
    // 删除行
    childrenDelete(row, index) {
      this.children.data.splice(index, 1);
    },
    //添加账号
    addChildren() {
      console.log(self);
      let j = {
        id: this.editForm.id || this.addForm.id,
        name: "",
        sex: "",
        birthday: "",
        isSet: true,
        _temporary: true,
      };
      this.children.data.push(j);
      // this.children.sel = j;
    },
  },
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}
.handle-select {
  width: 120px;
}
.handle-input {
  width: 300px;
  display: inline-block;
}
.downloadexcel {
  margin-top: 10px;
}
</style>