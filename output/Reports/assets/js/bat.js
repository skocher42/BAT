$('#btn-AddToAggregate').on('click', function() {
   $('#btn-AggregateReports').tab('show');
   return false;
});

$('#btn-Compare').on('click', function() {
   $('#btn-CompareReports').tab('show');
   return false;
});

$('.select-radio-btn').on('click', function()
    {
        if ($(this).hasClass('glyphicon-ok-circle'))
            {
                $(this).removeClass('glyphicon-ok-circle');
                $(this).removeClass('selected');
                $(this).addClass('glyphicon-record');
            }
            else
            {
                $(this).removeClass('glyphicon-record');
                $(this).addClass('selected');
                $(this).addClass('glyphicon-ok-circle');
            }
        return false;
    }
);
