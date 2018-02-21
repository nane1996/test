<template>
  <v-container>
  <form id="Form" @submit.prevent="submit" class="jing">
          <h1> Student Registration Form </h1>
    <fieldset v-bind:class="{ picture: pictureActive }">
    <p>
      <label>
        First Name:  <input type="text" v-model="firstname" /> (max 30 charachters a-z and A-Z)</label>
</p>
  <p>
    Last Name: <input type="text" v-model="lastname" /> (max 30 charachters a-z and A-Z) </label>

  </p>
<p>
      <label>
      Date of Birth:
      <input type="date" name="depart" v-model="dob">
    </label>
</p>

<p>
    <label>
     Email ID:
     <input type="email" name="email" v-model="email"> (10 digit number)
   </label>
</p>
<p>
  <lable>
    Age:
    <input type="number" v-model="age">
  </lable>
</p>

<p>
      Gender:
      <input id="female" type="radio" name="gender" v-model="gender"
      value="f">
      <label for="female">Female</label>
      <input id="male" type="radio" name="gender" v-model="gender"
      value="m">
      <label for="male">Male</label>
    </p>

<p>
  <lable>
        Address:
      <input type="text"name="address" rows="8" cols="80" v-model="address">
      </textarea>
  </lable>
</p>

<p>
  <lable>
      City:
      <input type="text" name="city" v-model="city"> (max 30 characters a-z and A-Z)

  </lable>
</p>
<p>
  <lable>
        PIN CODE:
        <input type="number" name="pincode" v-model="pincode"> (6 digit number)

  </lable>
</p>
<p>
  <lable>
        State:
        <input type="text" name="state" v-model="state">

  </lable>
</p>
<p>
  <lable>
        Counrty:
        <input type="text" name="country" v-model="country">

  </lable>
</p>
<p>
  Hobbies:
      <input id="Drawing" type="radio" value="drawing" v-model="hobbies" name="whatever">
      <label for="Drawing">Drawing</label>
      <input id="Singing" type="radio" value="singing" v-model="hobbies" name="whatever">
      <label for="Singing">Singing</label>
      <input id="Dancing" type="radio" value="dancing" v-model="hobbies" name="whatever">
      <label for="Dancing">Dacninig</label>
      <input id="Sketching" type="radio" value="sketching" v-model="hobbies" name="whatever">
      <lable for="Sketching"> Sketching </lable>
      <input id="Others" type="radio" value="others" v-model="hobbies" name="whatever">
      <lable for="Others"> Others </lable>
      <input id="Others" type="textarea" :disabled="hobbies != 'others'" v-model="hobbiesText">
</p>
<p>
  QUALIFICATION:
  </head>

  <table>
    <tr>
      <th>SI.NO.</th>
      <th>Examination</th>
      <th>Bord</th>
      <th>Percentage</th>
      <th>Year of Passing </th>
    </tr>
    <tr>
      <td>1 </td>
      <td>Class X</td>
      <td> <input type="textarea" v-model="classX1"> </td>
      <td> <input type="textarea" v-model="classX2"> </td>
      <td> <input type="textarea" v-model="classX3"> </td>
    </tr>
    <tr>
      <td>2 </td>
      <td>Class XII </td>
      <td> <input type="textarea" v-model="classXII1"> </td>
      <td> <input type="textarea" v-model="classXII2"> </td>
      <td> <input type="textarea" v-model="classXII3"> </td>
    </tr>


     <tr>
      <td>3</td>
      <td>Graduation </td>
      <td> <input type="textarea" v-model="graduation1"> </td>
      <td> <input type="textarea" v-model="graduation2"> </td>
      <td> <input type="textarea" v-model="graduation3"> </td>
    </tr>

     <tr>
      <td>4</td>
      <td>Masters </td>
      <td> <input type="textarea" v-model="masters1"> </td>
      <td> <input type="textarea" v-model="masters2"> </td>
      <td> <input type="textarea" v-model="masters3"> </td>
    </tr>
    <div>
  </div>
  </table>
</p>
<p>

  Courses Applied For:
      <input id="BCA" type="radio" value="BCA" v-model="courses" name="courses">
      <lable for="BCA"> BCA </lable>
      <input id="B.Com" type="radio" value="B.Com" v-model="courses" name="courses">
      <lable for="B.Com"> B.Com </lable>
      <input id="B.Sc" type="radio" value="B.Sc"v-model="courses" name="courses">
      <lable for="B.Sc"> B.Sc </lable>
      <input id="B.A" type="radio"value="B.A" v-model="courses" name="courses">
      <lable for="B.A"> B.A </lable>
    </p>
      <p id="fstx">
      <button type="submit" value="Submit form">Submit</button>
      <button @click="reset" type="reset" value="Reset form">Reset</button>
    </p>
  </fieldset>
  </form>
</v-container>
</template>

<script>
import * as firebase from 'firebase'
export default {
  name: 'App',
  data () {
    return {
      pictureActive: true,
      hobbiesText: '',
      firstname: '',
      lastname: '',
      dob: '',
      email: '',
      age: '',
      gender: '',
      address: '',
      city: '',
      pincode: '',
      state: '',
      country: '',
      hobbies: '',
      classX1: '',
      classX2: '',
      classX3: '',
      classXII1: '',
      classXII2: '',
      classXII3: '',
      graduation1: '',
      graduation2: '',
      graduation3: '',
      masters1:'',
      masters2:'',
      masters3:'',
      courses: '',
    }
  },
  methods: {
    reset () {
      this.hobbiesText = '',
      this.firstname = '',
      this.lastname = '',
      this.dob = '',
      this.email = '',
      this.age = '',
      this.gender = '',
      this.address = '',
      this.city = '',
      this.pincode = '',
      this.state = '',
      this.country = '',
      this.hobbies = '',
      this.classX1 = '',
      this.classX2 = '',
      this.classX3 = '',
      this.classXII1 = '',
      this.classXII2 = '',
      this.classXII3 = '',
      this.graduation1 = '',
      this.graduation2 = '',
      this.graduation3 = '',
      this.masters1 ='',
      this.masters2 ='',
      this.masters3 ='',
      this.courses = ''
    },
    submit () {
      const person = {
        hobbiesText: this.hobbiesText,
        name: this.firstname,
        surname: this.lastname,
        dob: this.dob,
        email: this.email,
        age: this.age,
        gender: this.gender,
        address: this.address,
        city: this.city,
        pincode: this.pincode,
        state: this.state,
        country: this.country,
        hobbies: this.hobbies,
        classX1: this.classX1,
        classX2: this.classX2,
        classX3: this.classX3,
        classXII1: this.classXII1,
        classXII2: this.classXII2,
        classXII3: this.classXII3,
        graduation1: this.graduation1,
        graduation2: this.graduation2,
        graduation3: this.graduation3,
        masters1:this.masters1,
        masters2:this.masters2,
        masters3:this.masters3,
        courses: this.courses
      }
      console.log(person)
      firebase.database().ref('/').push(person)
      .then(() => {
        location.reload()
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table, th, td {
    border: 1px solid black;
}
h1 {
  text-align: center;
}


.picture {
  background-image: url('../static/gh.png');
  background-position: bottom right;
}

.jing{
  display: flex;
  flex-direction: column;

}

#fstx{
  text-align: center;
}

fieldset {
  border: 1px solid #76C4E2;
  ;
  border-radius: 0.25rem;
}

</style>
