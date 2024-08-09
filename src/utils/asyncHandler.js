const asyncHandler = (reuestHandler) => {
  (req, res, next) => {
    Promise.resolve(resquestHandler(req, res, next)).catch((err) => next(err));
  };
};
export { asyncHandler };

//with try catch
// const asyncHandler= (fun) => asyn(req,res,next) =>{
//     try {
//         await fun(req,res,next)
//     } catch (error) {
//         res.status(err.code ||500).json({
//             success:false;
//             message:err.message || 'Server Error'
//         })
//     }

// }
