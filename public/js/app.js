$(() => {
    // Show btn function
    const showDeleteBtn = (e) => {
        let target = $(e.target)

        // Goes from .movieCards to its child which is the deleteBtn
        target.children().eq(0).children().eq(0).css('display', 'inline-block')

    }
    

    // Hide btn function
    const hideDeleteBtn = (e) => {
        let target = $(e.target)
        
        // Goes from .movieCards to its child which is the deleteBtn
        target.children().eq(0).children().eq(0).css('display', 'none')

    }
        
   



    // Sets hover event listener to div with class movieCards.
    $('.movieCards').hover((e) => {
        showDeleteBtn(e)
    }, (e) => {
        hideDeleteBtn(e)
    })
})