

const noteContent=document.getElementById("note-box");
const fontColor=document.getElementById("color-palette");
const fontSize=document.getElementById("font-size");

const addNoteBt=document.getElementById("add-note");
addNoteBt.addEventListener("click",()=>{
    if(noteContent.value.trim()==""){
        alert("Please enter your note!");
        
    }
    else{
    const newNote=document.createElement("div");
    newNote.classList.add("notes");
    
    // add the remove event to the button of delete note 
    const deleteBt=document.createElement("button");
    deleteBt.addEventListener("click",()=>{
        newNote.remove();
    });
    deleteBt.classList.add("remove-note");
    deleteBt.innerHTML="X";
    newNote.appendChild(deleteBt);
    
    // add the note content
    const noteParagraph= document.createElement("p");

    noteParagraph.innerHTML+=noteContent.value;
    // add the note font size
    if(fontSize.value>=1 && fontSize.value<=80){
    noteParagraph.style.fontSize=`${fontSize.value}px`;
    }
    else{
        noteParagraph.style.fontSize="1.3rem";
    }
    // add the note font color
    noteParagraph.style.color=fontColor.value;

    newNote.appendChild(noteParagraph);

    document.body.appendChild(newNote)
    
    noteContent.value="";
    fontSize.value="16";
    fontColor.value='#000000';

    }
    

});



















