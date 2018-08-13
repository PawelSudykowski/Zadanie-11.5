
function Button(text)
{
    this.text = text || "Hello";}

// dopisanie metody Create
Button.prototype = {
    create : function()
    {
                   // this
  var self = this;
        
  this.element = document.createElement("button");
  this.element.innerText = this.text;     
		// Clic
 this.element.addEventListener("click", function()  {
    alert(self.text);
  });
              // Add Botton
        document.body.appendChild(this.element);
  }
}

// utworzenie przycisku
var btn1 = new Button("Hello!");
btn1.create();
