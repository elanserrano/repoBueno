//Usando el patrón Factory para la creación de un middleware de validación 
// lo que sigue es una función que regresa una función 
const Validator = 
({schema, getObject})=>
async(req,_,next)=>{

    //construyendo el objeto de validación
    const dataObject=getObject(req);
    //El proceso de validación se encierra en un bloque try
    try{
        //se valida el objeto
        const validData = await schema.validate(dataObject,{
            abortEarly: false,
        });
       //se inyecta el objeto validado en la petición
        req.validData = validData;
    } catch (error){
        //creando objeto de validación 
        req.errorData=error;
    }
    //se invoca al siguiente middleware de la cadena
    return next();
};
//Exportando validador 
export default Validator;