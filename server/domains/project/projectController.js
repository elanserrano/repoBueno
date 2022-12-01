// Creando los Actions Methods
// del controlador Project

// GET "/project"
// GET "/project/list"
const list = (req, res) => {
  // 1. Generando el view-model
  const viewModel = {};
  // 2. Madamos a generar la vista con el Template Engine
  res.render('project/list', viewModel);
};

// GET "/project/add"
// GET "/project/create"
const add = (req, res) => {
  const viewModel = {};
  res.render('project/add', viewModel);
};

//POST "/project/add"
//POST "/project/create"
const showAddProjectForm = (req, res) =>{
  const viewModel={};
  res.render('project/add', viewModel);
};
//POST "/project/add"
//POST "/project/create"
const addProject = (req, res) =>{
  //Rescando la información del formulario
  const{validData, errorData: error}= req;
      let project ={};
      let errorModel={};
      //Desestructurando y renombrando error de datos
      //Verificando si hay error de validación
      if(error){
        //rescatar los datos del formulario que fallaron en la validación
        project = error.value; 
        //Quiero generar un objeto que contenga los campos con error y sus errores
        errorModel = error.inner.reduce((prev,curr)=>{
          //creando una variable temporal donde se guardará el elemento anterior
          const newVal = prev;
          newVal[`${curr.path}Error`] = curr.message;
          return newVal;
        },{});
      }else{
        //Si los datos del formulario fueron válidos se asignan a project
        project = validData;
      }
        //Contestando los datos del proyecto
        res.status(200).render('project/add',{project,errorModel});   
};
// Exportando el Controlador
export default { list, showAddProjectForm, addProject};