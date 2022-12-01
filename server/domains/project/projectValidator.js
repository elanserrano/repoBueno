// importando la biblioteca de validación 
import * as Yup from 'yup';
//crenado un esqueema de validación para el proyecto
const projectSchema = Yup.object().shape({
    name: Yup.string().required('Se requiere un nombre de proyecto'),
    description: Yup.string()
    .max(500, 'No escribir más de 500 caracteres')
    .required('Se requiere una descripción del proyecto'),
});
//crenado el extractor de datos de la petición
const getProject=(req)=>{
    //extrayendo odatos de la petición
    const{ name,description}=req.body;
    //regresando el objeto del proyecto 
    return{
        name,
        description
    };
};

export default{
    projectSchema,
    getProject,
};