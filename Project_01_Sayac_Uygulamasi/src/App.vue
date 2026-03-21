
<template>
  <!--vh-100= Containerın boyutunu sayfanın tamamı kadar yapıyo uzunluğunu ayarlıyo yani yüksekliğini
      d-flex= içeriği istediğim yere koyabilmemi sağlıyo yani elemanları düzenlemek için
      align-items-center= dikeyde ortalıyo
      justify content-center= yatayda ortalıyo
      bg-light= arka plan rengini ayarlıyo-->
  <div class="container vh-100 d-flex align-items-center justify-content-center bg-light">
    <!--text-center= yazıyı ortalıyo
    -->
    <div class="row text-center">
       <div class="col-12 mb-3">
        <!--mb-3= 3 birimlik aşağıdan dış boşluk veriyo-->
          <h4  class="text-secondary fw-normal ">The current count is...</h4>
          <!--text-secondary= Yazının rengini gri yapıyo
              fw-normal= yazı boyutunu normal yapıyo-->
          <h1 class="display-1 fw-bold text-dark">{{ count }}</h1>
          <!--display-1 yazı boyutunu h1'den büyük yapıyo-->
       </div>
       <div class="col-12">
        <div class="d-flex justify-content-center gap-3">
          <!--gap-3= elemanlar arasına boşluk koyuyo-->
          
            <button class="btn custom-btn"
            @click="count--"
            >-</button>
          
          
            <button class="btn custom-btn"
            @click="count++"
            >+</button>
          
        </div>
       </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const count = ref(0)
</script>

<style scoped>

.custom-btn{/* buton tasarımı */
  background-color: rgb(255, 0, 0);
  color: black;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  width: 140px;
  height: 50px;
  border-radius: 50px;
  transition: opacity 0.2s; /**geçiş efekti veriyo */
}

.custom-btn:hover{/**mouse üstüne gelince çalışıyo */
  background-color: #980000;
  transform: scale(1.05);/**mouse üstüne gelince boyutunu %5 arttırıyo */
  color: #000;
}

.custom-btn:active {/**butonona tıklayınca çalışıyo) */
  background-color: #6a0000 !important; /* Daha da koyu bir kırmızı */
  transform: scale(0.95); /* Tıklayınca buton hafifçe içeri çöksün (gerçekçi hissettirir) */
}

.bg-light{
  background-color: #e9e9e9 !important;/**!important= css'e zorla yaptırıyo */
}
</style>