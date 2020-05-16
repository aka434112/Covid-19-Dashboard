<template>
  <v-flex xs12 sm7>
    <el-table ref="singleTable" :data="distictWiseData" style="width: 100% !important">
      <el-table-column
        property="confirmed"
        label="Confirmed Cases">
      </el-table-column>
      <el-table-column
        property="active"
        label="Active Cases">
      </el-table-column>
      <el-table-column
        property="recovered"
        label="Recovered Cases">
      </el-table-column>
      <el-table-column
        property="deceased"
        label="Deceased Cases">
      </el-table-column>
    </el-table>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      distictWiseData: [
              {
                "notes": "",
                "district": "Ramanagara",
                "active": 0,
                "confirmed": 0,
                "deceased": 0,
                "recovered": 0,
                "delta": {
                  "confirmed": 0,
                  "deceased": 0,
                  "recovered": 0
                }
              },
              {
                "notes": "",
                "district": "Shivamogga",
                "active": 12,
                "confirmed": 12,
                "deceased": 0,
                "recovered": 0,
                "delta": {
                  "confirmed": 3,
                  "deceased": 0,
                  "recovered": 0
                }
              },
              {
                "notes": "",
                "district": "Udupi",
                "active": 6,
                "confirmed": 9,
                "deceased": 0,
                "recovered": 3,
                "delta": {
                  "confirmed": 1,
                  "deceased": 0,
                  "recovered": 0
                }
              },
              {
                "notes": "",
                "district": "Uttara Kannada",
                "active": 30,
                "confirmed": 41,
                "deceased": 0,
                "recovered": 11,
                "delta": {
                  "confirmed": 0,
                  "deceased": 0,
                  "recovered": 0
                }
              },
              {
                "notes": "",
                "district": "Vijayapura",
                "active": 13,
                "confirmed": 53,
                "deceased": 3,
                "recovered": 37,
                "delta": {
                  "confirmed": 1,
                  "deceased": 0,
                  "recovered": 1
                }
              },
              {
                "notes": "",
                "district": "Yadgir",
                "active": 2,
                "confirmed": 2,
                "deceased": 0,
                "recovered": 0,
                "delta": {
                  "confirmed": 0,
                  "deceased": 0,
                  "recovered": 0
                }
              }
      ]
    }
  }
}
</script>

<style scoped>

</style>
