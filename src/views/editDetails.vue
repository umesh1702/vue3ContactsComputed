<template>
    <div class="w-[820px] h-auto align-center bg-slate-50 mx-[600px]">
  <div >
    contacts
    <button class=" ml-[650px] border-[1px] border-black hover:bg-gray-400 hover:text-white" >Add Contacts</button>

  </div><br>
  <hr>

    <br />
    <div>
    First Name <br />
    <input
      class="w-[350px] border-[1px] border-black"
      v-model="firstName"
      type="text"
      placeholder="first name"
      required
    /><br />
    lastName <br />
    <input
      class="w-[350px] border-[1px] border-black"
      v-model="lastName"
      type="text"
      placeholder="last name"
      required
    />
    <br />
    countrycode <br />
    <select
      class="w-[350px] border-[1px] border-black"
      v-model="countrycode"
      type="text"
      placeholder="country code name"
      required
    >
      <option v-for="option in countryOptions" :key="option" :value="option.value">
        {{ option.label }}
      </option></select
    ><br />
    phone <br />
    <input
      class="w-[350px] border-[1px] border-black"
      v-model="phone"
      type="tel"
      placeholder="phone"
      required
      pattern="[0-9]{10}"
    />

  </div>
</div>
</template>


<script setup>
import { ref } from "vue"


const firstName = ref('')
const lastName = ref('')
const countrycode = ref('')
const phone = ref('')
</script>