import GenericService from "./GenericService"

const teachersService = new GenericService("teachers")
const radioniceService = new GenericService("courses")
const orgsService = new GenericService("orgs")

const useTeachers = () => {
    teachersService.load()
    return teachersService;
}

const useCourses = () => {
    radioniceService.load()    
    return radioniceService;
}

const useOrgs = () => {
    orgsService.load()
    return orgsService
}

export { useTeachers, useCourses, useOrgs }