import GenericService from "./GenericService"

const teachersService = new GenericService("teachers")

const radioniceService = new GenericService("courses")

const useTeachers = () => {
    teachersService.load()
    return teachersService;
}

const useCourses = () => {
    radioniceService.load()    
    return radioniceService;
}

export { useTeachers, useCourses }