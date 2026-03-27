<script setup>
import q from "./data/quizes.json";
import {ref, watch} from "vue";//watch ile search değişkenini sürekli olarak kullanıcıdan dinlicez 
import Card from "./components/Card.vue";

const quizes = ref(q);

const search = ref("")//bu değişken arama yaparken kullanacağımız boş değişken bunun içine yazı yazıp filtreleme yapıcaz

watch(search, () =>{
//console.log("Dinliyom")  BUNU tarayıcıda incele yapıp ordan konsola girip gözlemleyebiliyoz.
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..."><!--Placeholder arkadaki arama yazısı.-->
    </header>
   <div class="options-container">
    <Card v-for="quiz in quizes" :key="quiz.id" :quiz ="quiz"/><!--Sanırım quiz yaparak Card.vue içine quiz değişkenini gönderdik-->
    <!--AYRICA bunu :quizImage="quiz.img" olark ayrı ayrı da gönderebilirdik ama biz direk quiz'i gönderip onun içinden çekeceğiz-->




      <!-- <div v-for = "quiz in quizes" 
      :key="quiz.id" 
      class="card"
      >
        <img :src="quiz.img" alt="">
        <div class="card-text">
          <h2>{{quiz.name}}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </div>
      </div>-->
    </div>
  </div>
</template>

<style scoped>
.container{
  max-width: 1000px;
  margin: 0 auto;
}

header{
  margin-bottom: 10px;
  margin-top: 30px;
  display:  flex;
  align-items: center;

}

header h1{
  font-weight: bold;
  margin-right: 30px;
}

header input{
  border:  none;
  background-color: rgba(128,128,128,0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container{
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

</style>
