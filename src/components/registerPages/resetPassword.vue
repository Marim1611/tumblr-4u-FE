<template>
  <body id="bc">
    <Header />

    <b-container class="bv-example-row">
      <div class="fillempty1"></div>
      <h1 class="Main">Tumblr4U</h1>

      <b-row>
        <b-col></b-col>

        <b-col col lg="3">
          <div class="error" v-if="emptyError">
            You do have to fill this stuff out, you know.
          </div>
          <div class="error" v-else-if="lengthError">
            The password should be minimum 8 characters length
          </div>
          <div class="error" v-else-if="lowerCase">
            Password should contain a lower case letter
          </div>
          <div class="error" v-else-if="upperCase">
            Password should contain an upper case letter
          </div>
          <div class="error" v-else-if="number">
            Password should contain at least one number
          </div>
          <div class="error" v-else-if="notMatch">
            The new passwords do not match
          </div>

          <form @submit.prevent="handel">
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              v-model="Email"
            />
            <input
              type="password"
              class="form-control"
              placeholder="New password"
              v-model="newPassword"
            />
            <input
              type="password"
              class="form-control"
              placeholder="New password"
              v-model="confirmPassword"
            />

            <b-row>
              <b-col>
                <button class="btn btn-danger bb" type="submit">
                  Set new password
                </button>
              </b-col>
            </b-row>
          </form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
    <div class="fillempty2"></div>
  </body>
</template>

<script>
import axios from "axios";
import Browser from "../../mocks/browser";
export default {
  name: "resetPassword",
  data() {
    return {
      Email: "",
      newPassword: "",
      confirmPassword: "",
      lengthError: false,
      lowerCase: false,
      upperCase: false,
      number: false,
      cleanPassword: false,
      emptyError: false,
      notMatch: false,
    };
  },
  components: {},

  methods: {
    isMockServer(baseUrl) {
      if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
        return false;
      else return true;
    },
    resetflags() {
      this.emptyError = false;
      this.lengthError = false;
      this.lowerCase = false;
      this.upperCase = false;
    },
    async handel() {
      if (!this.newPassword && !this.confirmPassword) {
        this.resetflags();
        this.emptyError = true;
      }
      //validate lower Case
      var lowerCaseLetters = /[a-z]/g;
      //validate upper Case
      var upperCaseLetters = /[A-Z]/g;
      // Validate numbers
      var numbers = /[0-9]/g;
      if (this.newPassword) {
        if (this.newPassword.length < 8) {
          this.resetflags();
          this.lengthError = true;
        } else if (!this.newPassword.match(lowerCaseLetters)) {
          this.resetflags();
          this.lowerCase = true;
        } else if (!this.newPassword.match(upperCaseLetters)) {
          this.resetflags();
          this.upperCase = true;
        } else if (!this.newPassword.match(numbers)) {
          this.resetflags();
          this.number = true;
        } else {
          this.cleanPassword = true;
        }
        if (this.cleanPassword) {
          if (this.newPassword === this.confirmPassword) {
            let myRoute = "";
            //""
            /*  */
            if (this.isMockServer(Browser().baseURL))
              myRoute = Browser().baseURL + "/posts";
            else myRoute = Browser().baseURL + `/user/reset_password/`;
            try {
              await axios
                .put(myRoute, {
                  email: this.Email,
                  password: this.newPassword,
                  cpassword: this.confirmPassword,
                })
                .then((res) => {
                  console.log(res)
                });
            } catch (e) {
              console.error(e);
            }
          } else {
            this.resetflags();
            this.notMatch = true;
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.cont {
  text-align: center;
}
#bc {
  font-family: "Ubuntu", sans-serif;
  color: #ffff;
  background-color: #001935;
  width: 100%;
  min-height: 100%;
  width: 100%;
}
.Main {
  text-align: center;
  margin-top: 50px;
  font-size: 5rem;
}
.bb {
  margin-top: 7px;
  width: 100%;
  text-align: center;
}
.pp {
  margin-top: 5px;
  text-align: center;
  font-weight: bold;
}
.fillempty1 {
  height: 150px;
}
.fillempty2 {
  height: 250px;
}
.ss {
  margin-top: 7px;
  text-align: center;
  width: 80%;
}
.error {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 400;
  margin: 15px 0;
  padding: 14px 15px;
}
.suc {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;

  padding: 14px 15px;
}
.bbb {
  background-color: rgba(0, 0, 0, 0.25);
}
</style>
