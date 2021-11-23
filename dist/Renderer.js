class Renderer{
    constructor(data){
   const source = $('#recipes-template').html()
   const template = Handlebars.compile(source)
   let newHtml = template({ players: data })
   $('#results').append(newHtml)
    }

}
