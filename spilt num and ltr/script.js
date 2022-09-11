var mail,res,text,letter,num
mail="ranjithkumar17@gmail.com"
res=mail.indexOf("@");
text=mail.slice(0,res);

letter=text.match(/[a-z]+/g)
num=text.match(/[0-9]+/g)