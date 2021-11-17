class Project {
    constructor(content) {
        //console.log(content)
        this.title = content.title;
        this.project_images = content.field_project_images.split(', ');
        this.desc = content.body;
        // console.log(this.desc)
        
    }

    get displayTeaser() {
        /* html */
        let teaser = `
            <div class='project-teaser' data-id='${i}'>                
                <img src='http://lookinside.ocadu.gd/${this.project_images[0]}' />
                <h2>${this.title}</h2>
                <div class=''></div>
            </div>
        `;
        return teaser;
    }

    get displayFull() {

        /* html */
        let full = `
            <div class='project-full' data-id='${i}'>                
                <img src='http://lookinside.ocadu.gd/${this.project_images[0]}' />
                <h2>${this.title}</h2>
                <div class=''></div>
            </div>

        `
        return full;
    }
}