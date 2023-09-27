// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const loki=require('lokijs')
const db=new loki('db.json')
var clientes=db.collections('clientes')
clientes.insert(
    {
        nome:'Jose',
        email:'JoseOrlandochilengue@gmail.com',

    }
)
db.save();

function ready(fn)
{
    if (document.readyState !='loading') {
        fn();
    }
    else{
        document.addEventListener('DOMContentLoaded', fn)
    }
}
ready(function()
{
    document.querySelector('#salva').addEventListener('click', function(e)
    {
        e.preventDefault()
        alert('ok');
        let data=
        {
            nome:document.querySelector('#nome').value,
            BI:document.querySelector('#BI').value,
            Telefone:document.querySelector('#Telefone').value,
        };
        // console.log(data);
        clientes.insert(data);
        db.save();
        alert('salvo com sucesso');
        document.querySelector('#cadastrar-cliente').reset()
    })

})