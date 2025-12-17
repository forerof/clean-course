(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate: Date;
        gender   : Gender;
        name     : string;
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({name, gender, birthdate}: PersonProps){
            this.birthdate = birthdate;
            this.gender    = gender
            this.name      = name;
        }
    }

    interface UserProps extends PersonProps {
        birthdate: Date;
        email    : string;
        gender   : Gender;
        name     : string;
        role     : string;
    }

    class User extends Person {
        
        public email: string;
        public role : string;
        public lastAccess: Date;

        constructor({birthdate, email, gender, name, role}: UserProps){
            super({name, gender, birthdate});
            this.email = email;
            this.role  = role;
            this.lastAccess = new Date();
        }
   
  

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps extends UserProps {
        birthdate: Date;
        email    : string;
        gender   : Gender;
        lastOpenFolder  : string;
        name     : string;
        role     : string;
        workingDirectory: string;
    }


    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor({
            birthdate, 
            email, 
            gender, 
            lastOpenFolder,
            name, 
            role, 
            workingDirectory, 
        }: UserSettingsProps){ 
            super({birthdate, email, gender, name, role});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });


})();