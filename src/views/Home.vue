 <template>
   <div class="main">
      
      
       
       <div class="card-body">
         <div id="card" class="card">
                <div class="head" v-if="settings.profile == true">
                    <div class="user" >
                        <img :src="saved.photo" width="48" height="48" class="avatar"/>
                        <div class="userinfo">
                            <div class="name">{{saved.name}} <div v-if="saved.verified == true" class="verified">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                              </svg></div></div>
                            <div class="username">@{{saved.username}}</div>
                        </div>
                    </div>
                    <div class="twitter-icon">
                      
                      <svg v-if="settings.logo == true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                       <svg v-if="settings.logo == false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                       <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>

                       </svg>
                      </div>
                </div>
                <div class="body">
                    <div v-html="saved.text" class="text"></div>
                    <div class="date" v-if="settings.date == true">{{saved.date.date}} {{saved.date.time.saat}}:{{saved.date.time.dakika}} · {{saved.date.day}} {{saved.date.month}} {{saved.date.year}} · <a class="link">Twitter for {{saved.device}}</a></div>
                  <div class="hr" v-if="settings.comment == true"></div>
                </div>
                <div class="footer" v-if="settings.comment == true">
                    <div class="component">
                        <div class="svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 24 24">
                                <g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g>  </svg>
                        </div>
                        <div class="count">{{formatter(saved.like)}}</div>
                    </div>
                    <div class="component">
                        <div class="svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 24 24">
                                <g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g>
                                          </svg>
                        </div>
                        <div class="count">{{formatter(saved.comment)}}</div>
                    </div>
                    <div class="component">
                        <div class="svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 24 24">
                                <g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg></div>
                        <div class="count">{{formatter(saved.retweet)}}</div>
                    </div>
                    <div class="component">
                      <div class="svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 24 24">
                           
                        <g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g>
                        </svg>
                      </div>
                    </div>
                </div>
            </div>  
       </div>
            <vs-dialog blur v-model="segment">
        <template #header>
          <h4 class="not-margin">
            Kart Bölümlerini Düzenle
          </h4>
        </template>


        <div>
          <div class="switch">
            <p>Profil Bilgileri</p>
            <vs-switch v-model="settings.profile">
              <template #on>
              <i class="bi bi-person-check-fill"></i>
              </template>
              <template #off>
              <i class="bi bi-person-x-fill"></i>
              </template>
            </vs-switch>
          </div>
          <div class="switch">
            <p>Zaman Bilgileri</p>
            <vs-switch v-model="settings.date">
              <template #on>
              <i class="bi bi-calendar-check-fill"></i>
              </template>
              <template #off>
              <i class="bi bi-calendar-x-fill"></i>
              </template>
            </vs-switch>
          </div>
          <div class="switch">
            <p>İstatistik Bilgileri</p>
            <vs-switch v-model="settings.comment">
              <template #on>
              <i class="bi bi-bar-chart-fill"></i>
              </template>
              <template #off>
            <i class="bi bi-x-circle-fill"></i>
              </template>
            </vs-switch>
          </div>
          <div class="switch">
            <p>Logo ( <svg v-if="settings.logo == true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                       <svg v-if="settings.logo == false" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                       <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>

                       </svg> )</p>
            <vs-switch v-model="settings.logo">
              <template #on>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
              </template>
              <template #off>
            <i class="bi bi-three-dots"></i>
              </template>
            </vs-switch>
          </div>
        </div>

        <template #footer>
         <vs-button success icon block @click="segment=!segment"><i class="bi bi-save" style="margin-right:5px"></i> Kaydet</vs-button>
        </template>
      </vs-dialog>
     <vs-dialog auto-width scroll overflow-hidden blur v-model="active">
        <template #header>
         <h4>Kart Ayarları</h4>
        </template>
       <div style="display:flex;justify-content:center">
         <div class="">
        <div >
          <p>Adınız Soyadınız</p>
           
          <vs-input v-model="card.name"  placeholder="Adınız Soyadınız" />
         
        </div>  
        
        
       <div class="ma">
         <p>Kullanıcı Adınız</p>
          <vs-input  v-model="card.username"  placeholder="Kullanıcı Adınız" />
       
       </div>  
       <div class="ma">
         <p>Profil Fotoğrafı</p>
         <img :src="card.photo" style="width:160px;border-radius:5px">
          <input style="display:none" ref="file" accept="image/*" @change="photo($event)" type="file"  />
          <vs-button icon warn @click="$refs.file.click()"><i class="bi bi-file-image"></i> &nbsp; Resim Seç</vs-button>
       </div> 
       <div class="ma">
         <vs-switch style="width:80px" v-model="card.verified" >Verified</vs-switch>
       </div>
       
       <div class="ma">
         <p>Açıklama </p>
         <textarea  rows="7" placeholder="Açıklama" class="textarea" v-model="card.text"/>

       </div>
      <div class="ma">
        <p>Zaman Dilimi Seçin</p>
         <vs-select placeholder="Zaman Dilimi" v-model="card.date.date">
        <vs-option  label="Öğleden Önce" value="ÖÖ">
          Öğleden Önce
        </vs-option>
        <vs-option label="Öğleden Sonra" value="ÖS">
          Öğleden Sonra
        </vs-option>
       
      </vs-select>
      </div>

    <div class="ma">
      <p>Saat Seçin</p>
        <div style="display:flex;">
         <vs-select
        
        v-model="card.date.time.saat"
      placeholder="Saat"
      style="width:65px"
      >
      <vs-option v-for="n in 12" :key="n" :label="n" :value="n">
         {{n}}
        </vs-option>
        
      </vs-select>
      <vs-select
        
        v-model="card.date.time.dakika"
      placeholder="Dakika"
      style="width:75px"
      >
       <vs-option label="00" value="00">
          00
        </vs-option>
      <vs-option v-for="n in 59" :key="n" :label="n" :value="n">
         {{n}}
        </vs-option>
        
      </vs-select></div>

    </div>




      <div class="ma">
        <p>Tarih Seçin</p>
         <div style="display:flex;"> 
         <vs-select
        
        v-model="card.date.day"
      placeholder="Gün"
      style="width:65px"
      >
      <vs-option v-for="n in 31" :key="n" :label="n" :value="n">
         {{n}}
        </vs-option>
        
      </vs-select>
      <vs-select
        
        v-model="card.date.month"
      placeholder="Ay"
      style="width:100px"
      >
       <vs-option label="Ocak" value="Oca">
         Ocak
        </vs-option>
     <vs-option label="Şubat" value="Şub">
         Şubat
        </vs-option>
        <vs-option label="Mart" value="Mar">
         Mart
        </vs-option>
        <vs-option label="Nisan" value="Nis">
         Nisan
        </vs-option>
        <vs-option label="Mayıs" value="May">
         Mayıs
        </vs-option>
        <vs-option label="Haziran" value="Haz">
         Haziran
        </vs-option>
        <vs-option label="Temmuz" value="Tem">
         Temmuz
        </vs-option>
        <vs-option label="Ağustos" value="Ağu">
         Ağustos
        </vs-option>
         <vs-option label="Eylül" value="Eyl">
         Eylül
        </vs-option>
         <vs-option label="Ekim" value="Eki">
         Ekim
        </vs-option>
         <vs-option label="Kasım" value="Kas">
         Kasım
        </vs-option>
         <vs-option label="Aralık" value="Ara">
         Aralık
        </vs-option>
      </vs-select>
      <vs-select
        
        v-model="card.date.year"
      placeholder="Yıl"
      style="width:85px"
      >
      <vs-option v-for="yil in yillar" :key="yil" :label="yil" :value="yil">
        {{yil}}
        </vs-option>
        
      </vs-select>
      </div>
      </div>
      
      <div class="ma">
        <p>Cihaz</p>
      <vs-select
        
        v-model="card.device"
      placeholder="Cihaz"
      
      >
      <vs-option label="İphone" value="İphone">
        İphone
        </vs-option>
        <vs-option label="Android" value="Android">
        Android
        </vs-option>
        <vs-option label="Desktop" value="Desktop">
        Desktop
        </vs-option>

      </vs-select>  
      
      
      </div >
        <div class="ma">
        <p>Like Sayısı</p>
       <vs-input type="number" v-model="card.like" placeholder="Like Sayısı">
        
      </vs-input>
      
      </div>
        
      <div class="ma">
        <p>Yorum Sayısı</p>
        <vs-input type="number" v-model="card.comment" placeholder="Yorum Sayısı">
        
      </vs-input>
      </div>
      <div class="ma">
        <p>Retweet Sayısı</p>
        <vs-input style="width:60px !important" type="number" v-model="card.retweet" placeholder="Retweet Sayısı">
        
      </vs-input>
      </div>
     
      </div>
       </div>
       
        <template #footer>
          <div class="footer-dialog">
            <vs-button @click="save()" block>
              Kaydet
            </vs-button>

          </div>
        </template>
      </vs-dialog> 
      <div class="bottom">
        <vs-button block icon primary  @click="active=!active"><i class="bi bi-gear" style="margin-right:5px"></i>  Düzenle</vs-button>
 <vs-button block icon success @click="segment=!segment"><i class="bi bi-window-sidebar" style="margin-right:5px"></i>  Bölümleri Düzenle</vs-button>

<vs-button block icon :loading="loading" warn @click="photodownload()"><i class="bi bi-download" style="margin-right:5px"></i>  İndir</vs-button>

      </div>
    </div>
   
  </template>
  <script>
import html2canvas from 'html2canvas'
  export default {
    data(){
      return{
        settings:{
          profile:true,
          date:true,
          comment:true,
          logo:true
        },
        active: false,
        segment:false,
        card:{
          photo:'/john.png',
          name:'John Doe',
          username:'johndoe',
          verified:true,
          text:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.",
          date:{
            date:'ÖÖ',
            time:{
              saat:12,
              dakika:12
            },
            day:1,
            month:'Oca',
            year:2021
          },
          device:'Desktop',
          like:0,
          comment:0,
          retweet:0
        },
        yillar:[
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025
        ],
         saved:{
          photo:'/john.png',
          name:'John Doe',
          username:'johndoe',
          verified:true,
         text:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.", date:{
            date:'ÖÖ',
            time:{
              saat:12,
              dakika:12
            },
            day:1,
            month:'Oca',
            year:2021
          },
          device:'Desktop',
          like:0,
          comment:0,
          retweet:0
        },
        loading:false
      }
     
    },
    methods:{
      save(){
        this.saved = this.card
        this.active = false
      },
      photo(e){
        const file = e.target.files[0]
        this.card.photo = URL.createObjectURL(file)
      },
      photodownload(){
        this.loading=true
        const loading = this.$vs.loading()
        document.querySelector("meta[name=view-port]").setAttribute("content","width=device-width")
         html2canvas(document.querySelector(".card-body"),{useCORS: true,logging:true}).then(canvas => {
            
            var link = document.createElement('a');
          link.download = this.saved.name+'.png';
          link.href = canvas.toDataURL()
          link.click();
          this.loading = false
          loading.close()
          document.querySelector("meta[name=view-port]").setAttribute("content","width=device-width, initial-scale=1.0")
        });
      },
      formatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)

      }
    }
  }
  </script>
  <style scoped>
    .switch{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:5px;
    }
    .textarea{
          border: 2px solid transparent;
      padding: 7px 13px;
      border-radius: 10px;
      background-color: rgba(244, 247, 248,1 );
      color:rgba(44, 62, 80,1);
      resize: vertical;
    }
    .ma{
      margin-top:10px;
    
    }
    .component{
      cursor: pointer;
    }
    .card-body{
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      padding:20px;
      background-color: gray;
    }
    .bottom{
      position:fixed;
      bottom:0;
      left:0;
      display: flex;
      justify-content: space-between;
      height:40px;
      width: 100%;
      
    }
  </style>
