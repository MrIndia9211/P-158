AFRAME.registerComponent("highlight",{
schema:{
    selectedItemId:{default:"" ,type:"string" }
},
init:function(){
   this.handleMouseEnterEvents();
   this.handleMouseLeaveEvents();
},

handlePlacesListState:function(){
    const id = this.el.setAttribute("id")
    const movieId =["Thor","panther","Avenger","Spiderman"]
    if(movieId.includes(id)){
        const el = document.querySelector(`#${selectedItemId}`)
        const placeContainer = document.querySelector("#places-container")
        placeContainer.setAttribute("cursor-listner",{
            selectedItemId: id,
        });
        this.el.setAttribute("material",{
            color:"#D76B30",
            opacity:1,
        })
    }

},
handleMouseEnterEvents:function(){
    this.el.addEventListner("mouseenter",()=>{
        this.handlePlacesListState();
    })
},
handleMouseLeaveEvents:function(){
    this.el.addEventListner("mouseleave",()=>{
        const{selectedItemId} = this.data
        if(selectedItemId){
            const el = document.querySelector(`#${selectedItemId}`)
            const id = el.getAttribute("id")
            if(id == selectedItemId){
                el.setAttribute("material",{
                    color:"#0077cc",
                    opacity:1
                })
            }
        }
    })
}
})