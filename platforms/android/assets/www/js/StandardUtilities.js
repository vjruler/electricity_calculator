///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Menu Functions.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function show_menu_subtitle(subtitle)
{
    document.getElementById("menu_subtitle").innerHTML = subtitle;
}

function hide_menu_subtitle()
{
    document.getElementById("menu_subtitle").innerHTML = "&nbsp;";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Footer Functions.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function write_direct_contact()
{
    var direct_contact_reversed = ">a/<yltcerid>\"moc.liamg" + "" + "@" + "" + "feersazmah:otliam\"=ferh a<";
    var direct_contact = "";
    for (var i = direct_contact_reversed.length - 1; i >= 0; i--)
        direct_contact += direct_contact_reversed.charAt(i);
    document.writeln(direct_contact + ", or");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// End.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////