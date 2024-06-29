<template>

  <div class="mainDiv relative  tetx-center m-auto h-a w-c bg-white -mt-14 ">
     <!-- SECTION 1 -->
    <div class="forTopInfo h-b bg-c1">
      <!--  -->
      <div class="half1 w-x h-b  absolute  left- 2/2  ">
        
        <p class="text-left ml-b text-c2  text-a mt-2 ">Sell at I-Spektr</p>

      </div>
     <!--Choose language-->
      <div class="w-x h-b   absolute left-1/2 -ml-2">

         <p class="border border-c3 rounded-3xl p-1 w-20 mt-d h-8 inline-block text-c4 text-center">ENG</p>
        <fa :icon="['fas', 'caret-up']" class=" text-c5 absolute -top-e text-2xl inline-block -ml-7 cursor-pointer active:text-blue-900 p-2 rotate-180" />
        

      </div>
      <!-- Locatin Div -->
       <div class="ml-36 -mt-5">
        <fa :icon="['fas', 'location-dot']" class="text-lg ml-f mt-g inline-block" />
        <p class="inline-block ml-3 -mt-12 text-c4">Uzbekistan,Tashkent</p>
        
       </div>
    </div>

    <!-- SECTION 2 -->
     <div class="relative bg-white">

      <div class= "h-20 absolute -top-1   left-r ">
      <!--I-Spektr & Category -->
      <div class="h-11 w-k  inline-block mt-3 -ml-l ">
        <h1 class="inline-block mt-1   -ml-48 -font-bold text-3xl">I-Spektr<sup class="font-extrabold text-xl -ml-d">TM</sup></h1>
        <div class="w-36 h-11 rounded-3xl -mt-10 ml-48 bg-c6  relative  ">

         <div class="">
          <fa :icon="['fas', 'bars']" class="text-blue-50 text-xl  mt-n  absolute left-5  cursor-pointer active:text-black"/> 
          <p class="  text-white text-center ml-4   absolute top-p right-o text-md tracking-wide ">Categories</p>

         </div>
        </div>
      </div>

      

     </div>

     <!-- SearchBar -->

     <div class="search-bar w-q h-11  bg-white  border-c7 border-2  rounded-full absolute left-s top-2">
      <p class="h-11 w-14 bg-c7 ml-t -mt-d rounded-r-full cursor-pointer">
        <fa :icon="['fas', 'magnifying-glass']" class="text-white w-4 h-4 mt-3 -ml-2  " />
      </p>
     </div>

     <!-- icons(heart,cart,person) -->

     <div class="w-80 h-10   absolute left-u top-v2 ">

      <div class="Heart">
        <fa :icon="['fas', 'heart']" class="-ml-v -mt-1 text-2xl text-black  cursor-pointer active:text-blue-900" />
        <p class="w-9 h-2 text-sm   ml-1 text-black ">Wishlist</p>
      </div>

      <div class="Cart -mt-8 -ml-32 ">
        <fa :icon="['faAddressBook', 'cart-shopping']"  class="text-black text-2xl cursor-pointer active:text-blue-900 "/>
        <p class="text-sm -mt-1 text-black">Cart</p>
      </div>

      <div class="Person -mt-v3 ml-40  ">
       
        <div class="IconOfPerson w-10 h-10 border-2 rounded-full border-black ">
          <fa :icon="['fas', 'user']" class="text-black mt-1 text-2xl  cursor-pointer active:text-blue-900 " />
        </div>

        <div class="userInfo -mt-10  text-black ml-10 tracking-widest">
          <h1 class="text-sm">Ibrokhim M.</h1>
          <h1 class="text-v8 text-sm -mt-e tracking-tight text-left ml-3">@ibrokhimda...</h1>

        </div>


      </div>

     </div>
     
     </div>   


  <!-- Advertise SECTION -->
    
    <div class="ml-16 mt-20 ">
      <img src="./assets/photos/prototype.png" alt="ads" class="w-v4 h-80  rounded-3xl">
    </div>


    <!-- Products word SECTION-->

    <div class="ml-16 mt-14">
      <h1 class="w-8 text-3xl font-bold text-v9">Products</h1>
    </div>

    <!-- Products  SECTION1 -->

    <div class="w-k h-v5   absolute  ml-16 mt-14">

      <!-- Filter word -->
       <h1 class="text-v9 text-2xl h-20 w-44 font-semibold -ml-v6 ">Filters</h1>

       <hr class="w-v8  h-v9 bg-v10 ml-2 -mt-10">


      <!-- Price range -->
       <div class="w-80 h-36  relative"> 
        <h1 class="text-b font-bold text-v9  text-left mt-4">Price range</h1>
        
        <div class="absolute "><input type="number" placeholder="$ 257" name="cost" id="cost" class="w-28 h-10  border  border-v10 text-center ml-v7 mt-2"></div>
        <div class=" absolute left-v10"><input type="number" placeholder="$ 557" name="cost" id="cost" class="w-28 h-10  border  border-v10 text-center ml-v7 mt-2"></div>


        <!-- Lines -->

        <div class="leftSide w-v16 h-2 absolute bottom-3 rounded-l-full bg-v8"></div>
        <div class="roundShape w-4 h-4 absolute bottom-2 left-v11 rounded-full bg-c6"></div>
        <div class="middleShape w-v13 h-2 bg-c6 bottom-3 left-v12 absolute"></div>
        <div class="roundShape w-4 h-4 absolute bottom-2 left-v14 rounded-full bg-c6"></div>
        <div class="rightSide w-v15 h-2 absolute bottom-3 -right-v17 rounded-r-full bg-v8"></div>

         <hr class="w-80 h-v9 bg-v10 ml-2 mt-36">
         
       </div>

       <!-- General -->

    <div class="relative">
      <div class="w-v18  mt-11 h-v16  ">
        <div class="text-left text-b font-medium">
         <div class="-mt-2  absolute">
          <h1 class="text-v12 font-medium  inline-block">General</h1>
          <fa :icon="['fas', 'chevron-up']"  class="ml-64 text-lg text-v14 h-4 -mb-v7 cursor-pointer active:text-black"/>

         </div>
        </div>

      <div class="absolute top-7 left-d" >
        <div class=" inline-block -ml-2 ">
        <div class="flex items-center ml-3 mb-1">
          <input type="checkbox" id="checkbox1" name="vehicle1" value="Free shippimng" class="w-5 h-5 inline-block text-blue-600 focus:ring-blue-500 cursor-pointer rounded-2xl border">
          <h1  class="ml-2 font-medium text-o  text-v12">Free shipping</h1>
        </div>

        <div class="flex items-center ml-3 mb-1">
          <input type="checkbox" id="checkbox1" name="vehicle1" value="Free shippimng" class="w-5 h-5 inline-block text-blue-600 focus:ring-blue-500 cursor-pointer">
          <h1  class="ml-2 text-o font-medium text-v12">Golden items</h1>
        </div>
       </div>

       <div class=" inline-block ml-11">

        <div class="flex items-center ml-3 mb-1">
          <input type="checkbox" id="checkbox1" name="vehicle1" value="Free shippimng" class="w-5 h-5 inline-block text-blue-600 focus:ring-blue-500 cursor-pointer">
          <h1  class="ml-2   text-o font-medium text-v12 ">Instant shipping</h1>
        </div>

        <div class="flex items-center ml-3 mb-1">
          <input type="checkbox" id="checkbox1" name="vehicle1" value="Free shippimng" class="w-5 h-5 inline-block text-blue-600 focus:ring-blue-500 cursor-pointer">
          <h1  class="ml-2  text-o font-medium text-v12">Cashback</h1>
        </div>
       </div>
      </div>

        
       </div>
    </div>

       <hr class="h-1 w-v8  ml-2 mt-1 text-v13" >


       <!-- Brand section -->

       <div class="w-v19 h-v20  mt-3 ">
        <!--  -->
        <div class="w-v19">
          <h1 class="text-v12 font-medium  inline-block ">Brand</h1>
          <fa :icon="['fas', 'chevron-up']"  class="ml-v21 text-lg text-v14 h-4 -mb-v7 cursor-pointer active:text-black"/>


        </div>
      <!--  -->

      <div class="-ml-3 mt-3">
       

        <div class="inline-block -ml-14">
          <div class="flex items-center ml-3 mb-3">
          <input type="checkbox" id="checkbox1" name="vehicle1" value="Free shippimng" class="w-5 h-5 inline-block text-blue-600 focus:ring-blue-500 cursor-pointer rounded-2xl border">
          <h1  class="ml-2 font-medium text-o  text-v12">Artel</h1>
        </div>

        <div class="flex items-center ml-3 mb-3">
          <input type="checkbox" id="checkbox1" name="vehicle1" value="Free shippimng" class="w-5 h-5 inline-block text-blue-600 focus:ring-blue-500 cursor-pointer rounded-2xl border">
          <h1  class="ml-2 font-medium text-o  text-v12">Samsung</h1>
        </div>

        <div class="flex items-center ml-3 mb-3">
          <input type="checkbox" id="checkbox1" name="vehicle1" value="Free shippimng" class="w-5 h-5 inline-block text-blue-600 focus:ring-blue-500 cursor-pointer rounded-2xl border">
          <h1  class="ml-2 font-medium text-o  text-v12">Elite</h1>
        </div>

        </div>

        <div class="inline-block ml-14">
          <div class="flex items-center ml-3 mb-3">
          <input type="checkbox" id="checkbox1" name="vehicle1" value="Free shippimng" class="w-5 h-5 inline-block text-blue-600 focus:ring-blue-500 cursor-pointer rounded-2xl border">
          <h1  class="ml-2 font-medium text-o  text-v12"> Shivaki</h1>
        </div>
        <div class="flex items-center ml-3 mb-3">
          <input type="checkbox" id="checkbox1" name="vehicle1" value="Free shippimng" class="w-5 h-5 inline-block text-blue-600 focus:ring-blue-500 cursor-pointer rounded-2xl border">
          <h1  class="ml-2 font-medium text-o  text-v12">Biryusa</h1>
        </div>
        <div class="flex items-center ml-3 mb-3">
          <input type="checkbox" id="checkbox1" name="vehicle1" value="Free shippimng" class="w-5 h-5 inline-block text-blue-600 focus:ring-blue-500 cursor-pointer rounded-2xl border">
          <h1  class="ml-2 font-medium text-o  text-v12">LG</h1>
        </div>


        </div>
      </div>
      <!--  -->
      <div class="relative ml-1">
        <h1 class="text-inline-block text-o mt-1 absolute left-v7">See all 13 brands</h1>
        <fa :icon="['fas', 'chevron-up']"  class="ml-v21 text-lg text-v14 h-4 right-v22 absolute   top-v23 inline-block rotate-180  cursor-pointer active:text-black"/>
      </div>

      <hr class="h-1 w-v8  ml-2  text-v13 mt-9">

       </div>


       <!-- Quantity-->

      <div class="relative mt-2">
        <h1 class="text-o  absolute text-c6 font-medium ">Quantity</h1>
        <fa :icon="['fas', 'chevron-up']"  class="text-lg text-v14 h-4 -right-v7  top-1 absolute ml-14  rotate-180  cursor-pointer active:text-black"/>

      </div>

      <hr class="h-1 w-v8  ml-2  text-v13 mt-12">

       

      <!-- Color section -->
      
    <div>
      <div class="relative mt-2">
        <h1 class="text-o  absolute text-c6 font-medium ">Color</h1>
        <fa :icon="['fas', 'chevron-up']"  class="text-lg text-v14 h-4 -right-v7  top-1 absolute ml-14     cursor-pointer active:text-black"/>

      </div>


      <div class="mt-10 ml-4  flex absolute">

       <p class="w-6 h-6 bg-green-600 rounded-full inline-block cursor-pointer active:bg-green-400"></p>
       <p class="inline-block ml-2">Green</p>
        
      </div>

      <div class="mt-20 ml-4  flex absolute">

         <p class="w-6 h-6 bg-blue-600 rounded-full inline-block cursor-pointer active:bg-blue-400" ></p>
         <p class="inline-block ml-2">Blue</p>
 
       </div>

       <div class="mt-10 ml-4 flex absolute  left-56">

          <p class="w-6 h-6 bg-yellow-300  rounded-full inline-block cursor-pointer active:bg-yellow-50"></p>
             <p class="inline-block ml-2">Yellow</p>
        </div>

        <div class="ml-4 flex mt-20 absolute left-56">

              <p class="w-6 h-6   bg-red-700 rounded-full inline-block cursor-pointer active:bg-red-900"></p>
               <p class="inline-block ml-2">Red</p>
              </div>



    </div>


    </div>



    <!-- Products SECTION2 -->

    <div class="w-y h-c absolute  top-v26 left-v25">
         <!-- Prodocts info -->
      <div>
          <!-- 1 -->
        <div class="w-v27 h-d       inline-block ">
          <!-- 1(Photo) -->
           <div class="w-v27 h-v27 relative">
             <img src="./assets/photos/colonePhoto.jpg"  alt="photo" class="w-v27 h-v27 text-center absolute ">
            <div class="absolute top-3 left-3">
               <p class="w-14 h-7  text-center p-d rounded-full text-white bg-v15 inline-block">TOP</p>
               <p class="w-14 h-7 inline-block text-white bg-v16 p-d rounded-full ml-2">-12%</p>
               <img src="./assets/photos/iconHeart.jpg" alt="heart" class="w-6 h-5 inline-block ml-6 mt-1   active:text-red-800 cursor-pointer  ">
            </div>
            <div>
              <p class="w-28 h-6 rounded-full top-40 left-3 italic text-white bg-v15  text-sm  p-d absolute">Free shipping</p>
            </div>
           </div>
           <!-- Cost -->
            <div>
              <div class="text-center -ml-14">
                <p class="font-semibold text-xl text-black inline-block">$145.99</p>
                <p class="text-v17 decoration line-through inline-block ml-2">$189.99</p>
              </div>
            </div>
            <!-- Product definition -->
             <div>
              <p class="text-left text-black capitalize text-o ">ABS Home Theater Systems Remote Control Replacing Battery Powered</p>
             </div>
             <!-- Ranking of products -->
              <div>
                <div class="relative w-52 top-1">
                  <img src="./assets/photos/iconStar.jpg" alt="starIcon" class=" absolute w-6 h-5  ">
                  <p class="text-o text-black  inline-block top-v7 absolute left-v28">4.6</p>
                  <p class="text-v18 inline-block absolute left-16 top-v7 "> 25 people bought</p>
                </div>
              </div>
              <!-- Add button -->
               <div class="mt-9 -ml-10">
                <div>
                  <button class="bg-white text-v12 text-o p-1 rounded-full  border border-v12 w-40 h-10"><p class="inline-block -ml-4 text-xl w-3 h-3">+</p> <p class="inline-block ml-1">Add to cart</p></button>
                </div>
               </div>

        </div>
        <!-- 2 -->
        <div class="w-v27 h-d  ml-2  inline-block ">
          <!-- 1(Photo) -->
           <div class="w-v27 h-v27 relative">
             <img src="./assets/photos/picture2.jpg"  alt="photo" class="w-v27 h-v27 text-center absolute ">
            <div class="absolute top-3 left-3">
               <p class="w-14 h-7  text-center p-d rounded-full text-white bg-v15 inline-block">TOP</p>
               <p class="w-14 h-7 inline-block text-white bg-v16 p-d rounded-full ml-2">-12%</p>
               <img src="./assets/photos/iconHeart.jpg" alt="heart" class="w-6 h-5 inline-block ml-6 mt-1   active:text-red-800 cursor-pointer  ">
            </div>
             
           </div>
           <!-- Cost -->
            <div>
              <div class="text-center -ml-14">
                <p class="font-semibold text-xl text-black inline-block">$97.80</p>
                <p class="text-v17 decoration line-through inline-block ml-2">$139.99</p>
              </div>
            </div>
            <!-- Product definition -->
             <div>
              <p class="text-left text-black capitalize text-o ">Bosch MaxoMixx MS8CM6160 immersion blender, silver/black</p>
             </div>
             <!-- Ranking of products -->
              <div>
                <div class="relative w-52 top-1">
                  <img src="./assets/photos/iconStar.jpg" alt="starIcon" class=" absolute w-6 h-5  ">
                  <p class="text-o text-black  inline-block top-v7 absolute left-v28">4.6</p>
                  <p class="text-v18 inline-block absolute left-16 top-v7 "> 25 people bought</p>
                </div>
              </div>
              <!-- Add button -->
               <div class="mt-9 -ml-10">
                <div>
                  <button class="bg-white text-v12 text-o p-1 rounded-full  border border-v12 w-40 h-10"><p class="inline-block -ml-4 text-xl w-3 h-3">+</p> <p class="inline-block ml-1">Add to cart</p></button>
                </div>
               </div>

        </div>
        <!-- 3 -->
        <div class="w-v27 h-d  ml-2  inline-block ">
          <!-- 1(Photo) -->
           <div class="w-v27 h-v27 relative">
             <img src="./assets/photos/picture3.jpg"  alt="photo" class="w-v27 h-v27 text-center absolute ">
            <div class="absolute top-3 left-3">
               
               <img src="./assets/photos/iconRedheart.jpg" alt="heart" class="w-6 h-5 inline-block ml-36 mt-1   active:text-red-800 cursor-pointer  ">
            </div>
           
           </div>
           <!-- Cost -->
            <div>
              <div class="text-center -ml-14">
                <p class="font-semibold text-xl   -ml-20 text-black inline-block">$92.30</p>
                 
              </div>
            </div>
            <!-- Product definition -->
             <div>
              <p class="text-left text-black capitalize text-o "> Cross-country adidas Men'S hoodie SUPER and qualitiy new with pow...</p>
             </div>
             <!-- Ranking of products -->
              <div>
                <div class="relative w-52 top-1">
                  <img src="./assets/photos/iconStar.jpg" alt="starIcon" class=" absolute w-6 h-5  ">
                  <p class="text-o text-black  inline-block top-v7 absolute left-v28">4.8</p>
                  <p class="text-v18 inline-block absolute left-16 top-v7 "> 30 people bought</p>
                </div>
              </div>
              <!-- Add button -->
               <div class="mt-9 -ml-10">
                <div>
                  <button class="bg-white text-v12 text-o p-1 rounded-full  border border-v12 w-40 h-10"><p class="inline-block -ml-4 text-xl w-3 h-3">+</p> <p class="inline-block ml-1">Add to cart</p></button>
                </div>
               </div>

        </div>
        <!-- 4 -->
        <div class="w-v27 h-d   ml-2   inline-block   ">
          <!-- 1(Photo) -->
           <div class="w-v27 h-v27 relative ">
             <img src="./assets/photos/picture4.jpg"  alt="photo" class="w-v27 h-v27 text-center absolute ">
            <div class="absolute top-3 left-3">
                
               <img src="./assets/photos/iconRedheart.jpg" alt="heart" class="w-6 h-5 inline-block ml-36 mt-1 rounded-full  active:text-red-800 cursor-pointer  ">
            </div>
            <div>
              <p class="w-28 h-6 rounded-full top-40 left-3 italic text-white bg-v15  text-sm  p-d absolute">Free shipping</p>
            </div>
           </div>
           <!-- Cost -->
            <div>
              <div class="text-center -ml-14">
                <p class="font-semibold text-xl -ml-20 text-black inline-block">$13.99</p>
                 
              </div>
            </div>
            <!-- Product definition -->
             <div>
              <p class="text-left text-black capitalize text-o ">Men's overseas T-shirt, white and very vast work after charged phone via</p>
             </div>
             <!-- Ranking of products -->
              <div>
                <div class="relative w-52 top-1">
                  <img src="./assets/photos/iconStar.jpg" alt="starIcon" class=" absolute w-6 h-5  ">
                  <p class="text-o text-black  inline-block top-v7 absolute left-v28">3.0</p>
                  <p class="text-v18 inline-block absolute left-16 top-v7 "> 18 people bought</p>
                </div>
              </div>
              <!-- Add button -->
               <div class="mt-9 -ml-10">
                <div>
                  <button class="bg-white text-v12 text-o p-1 rounded-full  border border-v12 w-40 h-10"><p class="inline-block -ml-4 text-xl w-3 h-3">+</p> <p class="inline-block ml-1">Add to cart</p></button>
                </div>
               </div>

        </div>
        
        <!-- 5 -->
        <div class="w-v27 h-d mt-6    inline-block ">
          <!-- 1(Photo) -->
           <div class="w-v27 h-v27 relative">
             <img src="./assets/photos/picture5.jpg"  alt="photo" class="w-v27 h-v27 text-center absolute ">
            <div class="absolute top-3 left-3">
               <p class="w-14 h-7  text-center p-d rounded-full text-white bg-v15 inline-block">TOP</p>
               
               <img src="./assets/photos/iconRedheart.jpg" alt="heart" class="w-6 h-5 inline-block ml-20 mt-1   active:text-red-800 cursor-pointer  ">
            </div>
            <div>
            
            </div>
           </div>
           <!-- Cost -->
            <div>
              <div class="text-center -ml-28">
                <p class="font-semibold text-xl text-black inline-block">$430</p>
                <p class="text-v17 decoration line-through inline-block ml-2">$459</p>
              </div>
            </div>
            <!-- Product definition -->
             <div>
              <p class="text-left text-black capitalize text-o ">ABS Home Theater Systems Remote Control Replacing Battery Powered</p>
             </div>
             <!-- Ranking of products -->
              <div>
                <div class="relative w-52 top-1">
                  <img src="./assets/photos/iconStar.jpg" alt="starIcon" class=" absolute w-6 h-5  ">
                  <p class="text-o text-black  inline-block top-v7 absolute left-v28">8.6</p>
                  <p class="text-v18 inline-block absolute left-16 top-v7 "> 65 people bought</p>
                </div>
              </div>
              <!-- Add button -->
               <div class="mt-9 -ml-10">
                <div>
                  <button class="bg-white text-v12 text-o p-1 rounded-full  border border-v12 w-40 h-10"><p class="inline-block -ml-4 text-xl w-3 h-3">+</p> <p class="inline-block ml-1">Add to cart</p></button>
                </div>
               </div>

        </div>
        <!-- 6 -->
        <div class="w-v27 h-d  mt-6 ml-2  inline-block ">
          <!-- 1(Photo) -->
           <div class="w-v27 h-v27 relative">
             <img src="./assets/photos/picture6.jpg"  alt="photo" class="w-v27 h-v27 text-center absolute ">
            <div class="absolute top-3 left-3">
               <p class="w-14 h-7  text-center p-d rounded-full text-white bg-v15 inline-block">TOP</p>
                
               <img src="./assets/photos/iconHeart.jpg" alt="heart" class="w-6 h-5 inline-block ml-20 mt-1  rounded-lg  active:text-red-800 cursor-pointer  ">
            </div>
            
           </div>
           <!-- Cost -->
            <div>
              <div class="text-center -ml-24">
                <p class="font-semibold text-xl text-black inline-block">$19.99</p>
                <p class="text-v17 decoration line-through inline-block ml-2">$35</p>
              </div>
            </div>
            <!-- Product definition -->
             <div>
              <p class="text-left text-black capitalize text-o ">Children smart watch Smart, smart watch for girls and boys, GPS and ...</p>
             </div>
             <!-- Ranking of products -->
              <div>
                <div class="relative w-52 top-1">
                  <img src="./assets/photos/iconStar.jpg" alt="starIcon" class=" absolute w-6 h-5  ">
                  <p class="text-o text-black  inline-block top-v7 absolute left-v28">5.6</p>
                  <p class="text-v18 inline-block absolute left-16 top-v7 "> 225 people bought</p>
                </div>
              </div>
              <!-- Add button -->
               <div class="mt-9 -ml-10">
                <div>
                  <button class="bg-white text-v12 text-o p-1 rounded-full  border border-v12 w-40 h-10"><p class="inline-block -ml-4 text-xl w-3 h-3">+</p> <p class="inline-block ml-1">Add to cart</p></button>
                </div>
               </div>

        </div>
        <!-- 7 -->
        <div class="w-v27 h-d mt-6  ml-2   inline-block ">
          <!-- 1(Photo) -->
           <div class="w-v27 h-v27 relative">
             <img src="./assets/photos/picture7.jpg"  alt="photo" class="w-v27 h-v27 text-center absolute ">
            <div class="absolute top-3 left-3">
               <p class="w-14 h-7  text-center p-d rounded-full text-white bg-v15 inline-block">TOP</p>
               <p class="w-14 h-7 inline-block text-white bg-v16 p-d rounded-full ml-2">-29%</p>
               <img src="./assets/photos/iconHeart.jpg" alt="heart" class="w-6 h-5 inline-block ml-6 mt-1   active:text-red-800 cursor-pointer  ">
            </div>
            <div>
            
            </div>
           </div>
           <!-- Cost -->
            <div>
              <div class="text-center -ml-24">
                <p class="font-semibold text-xl text-black inline-block">$92.30</p>
                <p class="text-v17 decoration line-through inline-block ml-2">$459</p>
              </div>
            </div>
            <!-- Product definition -->
             <div>
              <p class="text-left text-black capitalize text-o ">Cross-country adidas Men'S hoodie SUPER quality  as well as co... </p>
             </div>
             <!-- Ranking of products -->
              <div>
                <div class="relative w-52 top-1">
                  <img src="./assets/photos/iconStar.jpg" alt="starIcon" class=" absolute w-6 h-5  ">
                  <p class="text-o text-black  inline-block top-v7 absolute left-v28">1.6</p>
                  <p class="text-v18 inline-block absolute left-16 top-v7 "> 5 people bought</p>
                </div>
              </div>
              <!-- Add button -->
               <div class="mt-9 -ml-10">
                <div>
                  <button class="bg-white text-v12 text-o p-1 rounded-full  border border-v12 w-40 h-10"><p class="inline-block -ml-4 text-xl w-3 h-3">+</p> <p class="inline-block ml-1">Add to cart</p></button>
                </div>
               </div>

        </div>
        <!-- 8 -->
        <div class="w-v27 h-d   mt-6  ml-2  inline-block ">
          <!-- 1(Photo) -->
           <div class="w-v27 h-v27 relative">
             <img src="./assets/photos/picture8.jpg"  alt="photo" class="w-v27 h-v27 text-center absolute ">
            <div class="absolute top-3 left-3">
               <p class="w-14 h-7  text-center p-d rounded-full text-white bg-v15 inline-block">TOP</p>
                
               <img src="./assets/photos/iconHeart.jpg" alt="heart" class="w-6 h-5 inline-block ml-20 mt-1   active:text-red-800 cursor-pointer  ">
            </div>
            <div>
         
            </div>
           </div>
           <!-- Cost -->
            <div>
              <div class="text-center -ml-14">
                <p class="font-semibold text-xl text-black inline-block">$97.80</p>
                <p class="text-v17 decoration line-through inline-block ml-2">$459 </p>
              </div>
            </div>
            <!-- Product definition -->
             <div>
              <p class="text-left text-black capitalize text-o ">Bosch MaxoMixx MS8CM6160 immersion blender, silver/black</p>
             </div>
             <!-- Ranking of products -->
              <div>
                <div class="relative w-52 top-1">
                  <img src="./assets/photos/iconStar.jpg" alt="starIcon" class=" absolute w-6 h-5  ">
                  <p class="text-o text-black  inline-block top-v7 absolute left-v28">4.0</p>
                  <p class="text-v18 inline-block absolute left-16 top-v7 "> 15 people bought</p>
                </div>
              </div>
              <!-- Add button -->
               <div class="mt-9 -ml-10">
                <div>
                  <button class="bg-white text-v12 text-o p-1 rounded-full  border border-v12 w-40 h-10"><p class="inline-block -ml-4 text-xl w-3 h-3">+</p> <p class="inline-block ml-1">Add to cart</p></button>
                </div>
               </div>

        </div>
       
        <!-- 9 -->
        <div class="w-v27 h-d mt-6    inline-block ">
          <!-- 1(Photo) -->
           <div class="w-v27 h-v27 relative">
             <img src="./assets/photos/picture9.jpg"  alt="photo" class="w-v27 h-v27 text-center absolute ">
            <div class="absolute top-3 left-3">
               
               <img src="./assets/photos/iconHeart.jpg" alt="heart" class="w-6 h-5 inline-block ml-36 mt-1 rounded-lg   active:text-red-800 cursor-pointer  ">
            </div>
            <div>
             </div>
           </div>
           <!-- Cost -->
            <div>
              <div class="text-center -ml-32">
                <p class="font-semibold text-xl text-black inline-block">$13.99</p>
                 
              </div>
            </div>
            <!-- Product definition -->
             <div>
              <p class="text-left text-black capitalize text-o ">Men's overseas T-shirt, white eith huge quality.That was made via </p>
             </div>
             <!-- Ranking of products -->
              <div>
                <div class="relative w-52 top-1">
                  <img src="./assets/photos/iconStar.jpg" alt="starIcon" class=" absolute w-6 h-5  ">
                  <p class="text-o text-black  inline-block top-v7 absolute left-v28">4.3</p>
                  <p class="text-v18 inline-block absolute left-16 top-v7 "> 95 people bought</p>
                </div>
              </div>
              <!-- Add button -->
               <div class="mt-9 -ml-10">
                <div>
                  <button class="bg-white text-v12 text-o p-1 rounded-full  border border-v12 w-40 h-10"><p class="inline-block -ml-4 text-xl w-3 h-3">+</p> <p class="inline-block ml-1">Add to cart</p></button>
                </div>
               </div>

        </div>

        <!-- 10 -->
        <div class="w-v27 h-d  mt-6 ml-2  inline-block ">
          <!-- 1(Photo) -->
           <div class="w-v27 h-v27 relative">
             <img src="./assets/photos/pictur10.jpg"  alt="photo" class="w-v27 h-v27 text-center absolute ">
            <div class="absolute top-3 left-3">
                
               <img src="./assets/photos/iconHeart.jpg" alt="heart" class="w-6 h-5 inline-block ml-36 mt-1 rounded-lg  active:text-red-800 cursor-pointer  ">
            </div>
            <div>
              <p class="w-28 h-6 rounded-full top-40 left-3 italic text-white bg-v15  text-sm  p-d absolute">Free shipping</p>
            </div>
           </div>
           <!-- Cost -->
            <div>
              <div class="text-center -ml-32">
                <p class="font-semibold text-xl text-black inline-block">$145.99</p>
                 
              </div>
            </div>
            <!-- Product definition -->
             <div>
              <p class="text-left text-black capitalize text-o ">ABS Home Theater Systems Remote Control Replacing Battery Powered</p>
             </div>
             <!-- Ranking of products -->
              <div>
                <div class="relative w-52 top-1">
                  <img src="./assets/photos/iconStar.jpg" alt="starIcon" class=" absolute w-6 h-5  ">
                  <p class="text-o text-black  inline-block top-v7 absolute left-v28">1.6</p>
                  <p class="text-v18 inline-block absolute left-16 top-v7 "> 9 people bought</p>
                </div>
              </div>
              <!-- Add button -->
               <div class="mt-9 -ml-10">
                <div>
                  <button class="bg-white text-v12 text-o p-1 rounded-full  border border-v12 w-40 h-10"><p class="inline-block -ml-4 text-xl w-3 h-3">+</p> <p class="inline-block ml-1">Add to cart</p></button>
                </div>
               </div>

        </div>
         <!-- 11 -->
         <div class="w-v27 h-d mt-6  ml-2   inline-block ">
          <!-- 1(Photo) -->
           <div class="w-v27 h-v27 relative">
             <img src="./assets/photos/picture11.jpg"  alt="photo" class="w-v27 h-v27 text-center absolute ">
            <div class="absolute top-3 left-3">
                
               <img src="./assets/photos/iconHeart.jpg" alt="heart" class="w-6 h-5 inline-block ml-36 mt-1  rounded-lg  active:text-red-800 cursor-pointer  ">
            </div>
            <div>
           
            </div>
           </div>
           <!-- Cost -->
            <div>
              <div class="text-center -ml-32">
                <p class="font-semibold text-xl text-black inline-block">$97.80</p>
              </div>
            </div>
            <!-- Product definition -->
             <div>
              <p class="text-left text-black capitalize text-o ">Bosch MaxoMixx MS8CM6160 immersion blender, silver/black ...</p>
             </div>
             <!-- Ranking of products -->
              <div>
                <div class="relative w-52 top-1">
                  <img src="./assets/photos/iconStar.jpg" alt="starIcon" class=" absolute w-6 h-5  ">
                  <p class="text-o text-black  inline-block top-v7 absolute left-v28">7.6</p>
                  <p class="text-v18 inline-block absolute left-16 top-v7 "> 95 people bought</p>
                </div>
              </div>
              <!-- Add button -->
               <div class="mt-9 -ml-10">
                <div>
                  <button class="bg-white text-v12 text-o p-1 rounded-full  border border-v12 w-40 h-10"><p class="inline-block -ml-4 text-xl w-3 h-3">+</p> <p class="inline-block ml-1">Add to cart</p></button>
                </div>
               </div>

        </div>
        <!-- 12 -->
        <div class="w-v27 h-d  mt-6  ml-2   inline-block ">
          <!-- 1(Photo) -->
           <div class="w-v27 h-v27 relative">
             <img src="./assets/photos/colonePhoto.jpg"  alt="photo" class="w-v27 h-v27 text-center absolute ">
            <div class="absolute top-3 left-3">
               <p class="w-14 h-7  text-center p-d rounded-full text-white bg-v15 inline-block">TOP</p>
               <p class="w-14 h-7 inline-block text-white bg-v16 p-d rounded-full ml-2">-12%</p>
               <img src="./assets/photos/iconHeart.jpg" alt="heart" class="w-6 h-5 inline-block ml-6 mt-1   active:text-red-800 cursor-pointer  ">
            </div>
            <div>
              <p class="w-28 h-6 rounded-full top-40 left-3 italic text-white bg-v15  text-sm  p-d absolute">Free shipping</p>
            </div>
           </div>
           <!-- Cost -->
            <div>
              <div class="text-center -ml-14">
                <p class="font-semibold text-xl text-black inline-block">$92.30</p>
                 
              </div>
            </div>
            <!-- Product definition -->
             <div>
              <p class="text-left text-black capitalize text-o ">Cross-country adidas Men'S hoodie SUPER as well as this sutable to...</p>
             </div>
             <!-- Ranking of products -->
              <div>
                <div class="relative w-52 top-1">
                  <img src="./assets/photos/iconStar.jpg" alt="starIcon" class=" absolute w-6 h-5  ">
                  <p class="text-o text-black  inline-block top-v7 absolute left-v28">4.6</p>
                  <p class="text-v18 inline-block absolute left-16 top-v7 "> 125 people bought</p>
                </div>
              </div>
              <!-- Add button -->
               <div class="mt-9 -ml-10">
                <div>
                  <button class="bg-white text-v12 text-o p-1 rounded-full  border border-v12 w-40 h-10"><p class="inline-block -ml-4 text-xl w-3 h-3">+</p> <p class="inline-block ml-1">Add to cart</p></button>
                </div>
               </div>

        </div>
        

        <!-- Load   and page buttons -->

        <div>

          <div class="mt-7">
            <button class="w-v29 h-11 text-white bg-v19  rounded-full text-center  border-none active:bg-blue-950 active:border-none">
              <fa :icon="['fas', 'download']" class="-ml-2 inline-block"  />
              <p class="inline-block ml-3"> Load 24 more</p>
            </button>
          </div>

          <div class="text-center relative  w-v30 h-e mt-6 ml-v21">
           <p class="absolute ">   <fa :icon="['fas', 'chevron-up']"  class="text-lg text-v20    mt-2  -rotate-90 cursor-pointer w-5 h-5 active:text-black"/></p> 
           <button class="p-1 border absolute border-v19 rounded-md w-9 h-9 active:text-v20 active:border-v20 left-8">1</button> 
           <button class="w-9 h-9 absolute text-blue-950 left-v32 active:text-v20">2</button>
           <button class="w-9 h-9 absolute text-blue-950 left-v33 active:text-v20">3</button>
           <button class="w-9 h-9 absolute text-blue-950 left-v34 active:text-v20">...</button>
           <button class="w-9 h-9 absolute text-blue-950 left-v35 active:text-v20">25</button>
           <p class="absolute   right-4   w-9 h-9 ">   <fa :icon="['fas', 'chevron-up']"  class="text-lg text-v19   mt-2  rotate-90 cursor-pointer w-5 h-5 active:text-black"/></p> 


          </div>
        </div>
     
        

        
    </div>
    </div>
  
      <!-- Ending SECTION -->
    <div class="w-c h-v36    absolute  bottom-44  "> 
          <!-- 1 -->
           <div class="w-c h-v38   relative bg-v21 ">

            <div class="photo w-r h-v38  absolute  left-1 inline-block  ">
              <img src="./assets/photos/picture2004.jpg" alt="pic" class=" h-v39   ">
            </div>
            <div class="photo w-z absolute left-v40 h-v38 ml-1 inline-block ">
              <div class="relative mt-14">
                <h1 class="text-black text-3xl absolute top-24 -left-3 font-semibold text-left">I-Spektr is a lot better on  <br> the mobile app</h1>
                <a href="https://www.apple.com/app-store"><img src="./assets/photos/appStorPic.jpg" alt="appStore" class="bg-black w-32 h-10 absolute -left-4 top-48"></a>
                <a href="https://www.playmarket.com"><img src="./assets/photos/googlePlayPic.jpg" alt="googlePlay" class="bg-black w-32 h-11 absolute left-28 top-48"></a>
              </div>
            </div>
            <div class="photo w-z h-v38 ml-1  absolute left-v41 inline-block ">
             <div class="relative   mt-32 w-64 h-52">
              <a href="https://muncha.uz">
              <img src="./assets/photos/QR.jpg" alt="Qr" class="w-28 top-5 left-16 h-28 absolute">
              <p class="absolute top-32 left-12">Scan the QR code to <br> download the app</p>
              </a>
             </div>
            </div>

           </div>
           <!-- 2 -->
            <div class="w-c h-v38 border relative mt-2 border-black bg-v22">
               <!--  -->
              <div class="w-w h-v38  -left-d absolute  inline-block">
            
                <div class="w-56 h-28   ml-20 mt-10  ">

                <h1 class="text-v23 text-left text-2xl font-extrabold">I-Spektr<sup class="font-extrabold text-2xl -ml-d">TM</sup></h1>
                <p class="text-v24 text-left w-60 h-10 text-sm">Every great product needs a great customer experience</p>

                <div class="text-left mt-4 -ml-2">
                  <a href="https://www.facebook.com"><fa :icon="['fab', 'facebook']"   class="ml-2 text-white"/></a> <a href="https://www.instagram.com"><fa :icon="['fab', 'instagram']" class="ml-2 text-white" /> </a><a href="https://x.com"><fa :icon="['fab', 'x-twitter']" class="ml-2 text-white" /></a> <a href="https://www.youtube.com"><fa :icon="['fab', 'youtube']"  class="ml-2 text-white"/></a>
                </div>


               </div>                
                    
               <div class="mt-32 -ml-40">
                <p class="inline-block text-v25 text-o "><a href="#">Privacy Policy</a></p>
                <p class="inline-block  text-v25 text-o ml-24"><a href="#">User Agreement</a></p>
                
               </div>
              </div>
              <!--  -->
              <div class="w-w h-v38   absolute  inline-block left-v43">
                <div class="inline-block mt-11 -ml-v42">
                  <h1 class="text-white text-lg font-bold text-left">About us</h1>
                  <p class="text-v25 text-o text-left underline mt-3"><a href="#">Points of submission</a></p>
                  <p class="text-v25 text-o text-left underline mt-2"><a href="#">Blog</a></p>
                  <p class="text-v25 text-o text-left underline mt-2"><a href="#">Vacancies</a></p>
                </div>

                <div class="inline-block mt-11 ml-9">
                  <h1 class="text-white text-lg font-bold text-left">For users</h1>
                  <p class="text-v25 text-o text-left underline mt-3"><a href="#">Get in touch with us</a></p>
                  <p class="text-v25 text-o text-left underline mt-2"><a href="#">Support</a></p>
                  <p class="text-v25 text-o text-left underline mt-2"><a href="#">FAQ</a></p>

                </div>

                <div class="inline-block mt-11 ml-9">
                  <h1 class="text-white text-lg font-bold text-left">For business owners</h1>
                  <p class="text-v25 text-o text-left underline mt-3"><a href="#">Sell at I-Spektr</a></p>
                  <p class="text-v25 text-o text-left underline mt-2"><a href="#">Affilate program</a></p>
                  <p class="text-v25 text-o text-left underline mt-2"><a href="#">Login to Seller profile</a></p>

                </div>
              </div>

              <div class="mt-72 ml-v44">
                <h1 class="text-o text-v25 ">2024. I-Spektr corparation</h1>
              </div>
            </div>
        </div>
  
  </div>

   
</template>

<script>
 

 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
