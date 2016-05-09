$(function() {
    var $pages = $('.page'),
        currPage = 0;

    function setZIndex(currPage) {
        $pages.each(function(index) {
            if (currPage === index) {
                $(this).css('z-index', 2);
            } else if (Math.abs(currPage - index) === 1) {
                $(this).css('z-index', 1);
            } else {
                $(this).css('z-index', 0);
            }
        });
    }

    function prevPage() {
        if (currPage) {
            currPage--;
            setZIndex(currPage);
            $pages.eq(currPage).removeClass('flipped');
        }
    }

    function nextPage() {
        if (currPage < $pages.length) {
            setZIndex(currPage);
            $pages.eq(currPage).addClass('flipped');
            currPage++;
        }
    }

    setZIndex(currPage);

    $('#prev').click(prevPage);
    $('#next').click(nextPage);

    $('.front').click(nextPage);
    $('.back').click(prevPage);
});