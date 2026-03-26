

<template>
 <main>
  <!--v-if ve v-show farkı= v-if direkt divi yok ediyor ancak v-show div orada var, mevcut ancak bazı sebeplerden ötürü göstermiyorum demek.-->
  <div v-if="showModal" class="overlay">
    <div class="modal">
      <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea><!--özel v- fonksiyonlarında .trim falan kullanabiliyoz.-->
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <button @click="addNote()">{{ editingNote ? "Update Note" : "Add" }}</button>
      <button @click="showModal = false; editingNote = null; newNote = null" class="close">Close</button>
    </div>
  </div>
  <div class="container">
    <header>
      <h1>Notes</h1>
      <button @click="showModal = true">+</button>
    </header>
    <div class="card-container">
      <div 
        v-for="note in notes" 
        :key="note.id"
        class="card" 
        :style="{backgroundColor: note.backgroundColor}"
        @click="openEditModal(note)"
      >
        <p class="main-text">{{ note.text }}</p>
        <p class="date">{{ note.date.toLocaleDateString("tu-TR") }}</p>
      </div>
    </div>
  </div>
 </main>
</template>
<script setup>
  import { ref } from 'vue';

  const showModal = ref(false);
  const newNote = ref(""); /**bunu direk burdan değiştirince textarea içinde gözüküyo */
  const errorMessage = ref("");//Boş not oluşturulmaması için hata mesajı
  const notes = ref([]);/**notları tutacak dizi tanımladık. */
  const editingNote = ref(null);//not düzenleniyomu yoksa yeni not mu ekleniyo diye kontrol etmek için kullanıyoruz.
  //const addNoteButtonName = ref("Add Note");//Not ekleme butonunu ismini değiştircez

  function getRandomColor() {//StackOverFlow'dan alınmış hazır renk oluşturma kodu
    return"hsl(" + Math.random() * 360 + ", 100%, 75%)";
}


  const addNote = () => {/**fonksiyon böyle tanımlanıyor. */
    if(newNote.value.length < 4){
      return errorMessage.value = "Note needs to be 5 character or more";
    }

    if(editingNote.value)
    {
      const note = notes.value.find(n => n.id === editingNote.value)

        if(note) {
          note.text = newNote.value
          showModal.value = false
        }
      return
    }

      
    notes.value.push({
      id: Math.floor(Math.random()* 1000000),/**her nota 0 ile 1 milyon arası id üretiyo */
      text: newNote.value,//notu atıyo
      date: new Date(),//mevcut tarihi alıyo
      backgroundColor: getRandomColor()
    })
    showModal.value = false;
    newNote.value = "";
    editingNote.value = null;
    errorMessage.value = ""
  }

  const openEditModal = (not) =>{
    showModal.value = true
    editingNote.value = not.id
    newNote.value = not.text

  }
</script>

<style>
body{
  font-family: 'Times New Roman', Times, serif;
}
</style>

<style scoped>/**scoped yapınca sadece bu .vue dosyası için css yazmış oluyoruz yapmazsak proje içindeki tüm .vue doyalarına etki eder. */
 /**başına . koyduklarım sayfa içinde örneğin tüm h1'leri kapsıyo ama . koydukları özel yazılan classları kapsıyo */
 main{
  height: 100vh;
  width: 100vw;
}
.container{
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

 header{
  display: flex;
  justify-content: space-between;
  align-items: center;
 }

 h1{
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
 }

 header button{/**header'in içindeki butonu kastediyo direkt */
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21,20,20);
  border-radius: 100%;/**kenarlarını yumuşatıyo */
  color: white;
  font-size: 20px;
 }

 .card{
  width: 255px;
  height: 255px;
  background-color: rgb(237,182,44);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;/**hizalamayı sütunlar şeklinde yapıyo */
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
 }

 .date{
  font-size: 12.5px;
  font-weight: bold;
 }

 .card-container{
  display: flex;
  flex-wrap: wrap;
 }

 .overlay{
  position: absolute;/**herşeyin en üstünde göz,kmesini sağlıyo galiba */
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.77);
  z-index: 10;/**diğer componentlerin üstünde yer almasını sağlıyo sanırım */
  display: flex;
  align-items: center;
  justify-content: center;
 }

 .modal{
  width: 750px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
 }

 .modal button{
  padding: 10px 20px;/**üstte ve altta 10px, sağda ve solda 20px boşluk bırakıyo böyle */
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
 }

 .modal .close{
  background-color: red;
  margin-top: 7px;
 }

 .modal p{
  color: red
 }
</style>
