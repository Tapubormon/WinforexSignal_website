const { v4: uuidv4 } = require('uuid');
const Images = require('./image')
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('/', (req, res) => {
    res.render('index', {
        uuid : uuidv4()
    })
})

app.get('/blog', (req, res) => {
    res.render('blog', {
        
    })
})

app.get('/reviews/:id', (req, res) => {
    res.render('testimonial', {
        image: [
            {
                uuid: Images[0].uuid,url: Images[0].url
            },{
                uuid: Images[1].uuid,url: Images[1].url
            },{
                uuid: Images[2].uuid,url: Images[2].url
            },{
                uuid: Images[3].uuid,url: Images[3].url
            },{
                uuid: Images[4].uuid,url: Images[4].url
            },{
                uuid: Images[5].uuid,url: Images[5].url
            },{
                uuid: Images[6].uuid,url: Images[6].url
            },{
                uuid: Images[7].uuid,url: Images[7].url
            },{
                uuid: Images[8].uuid,url: Images[8].url
            },{
                uuid: Images[9].uuid,url: Images[9].url
            },{
                uuid: Images[10].uuid,url: Images[10].url
            },{
                uuid: Images[11].uuid,url: Images[11].url
            },{
                uuid: Images[12].uuid,url: Images[12].url
            },{
                uuid: Images[13].uuid,url: Images[13].url
            },{
                uuid: Images[14].uuid,url: Images[14].url
            },{
                uuid: Images[15].uuid,url: Images[15].url
            },{
                uuid: Images[16].uuid,url: Images[16].url
            },{
                uuid: Images[17].uuid,url: Images[17].url
            },{
                uuid: Images[18].uuid,url: Images[18].url
            },{
                uuid: Images[19].uuid,url: Images[19].url
            },{
                uuid: Images[20].uuid,url: Images[20].url
            },{
                uuid: Images[21].uuid,url: Images[21].url
            },{
                uuid: Images[22].uuid,url: Images[22].url
            },{
                uuid: Images[23].uuid,url: Images[23].url
            },{
                uuid: Images[24].uuid,url: Images[24].url
            },{
                uuid: Images[25].uuid,url: Images[25].url
            },{
                uuid: Images[26].uuid,url: Images[26].url
            },{
                uuid: Images[27].uuid,url: Images[27].url
            },{
                uuid: Images[28].uuid,url: Images[28].url
            },{
                uuid: Images[29].uuid,url: Images[29].url
            },{
                uuid: Images[30].uuid,url: Images[30].url
            },{
                uuid: Images[31].uuid,url: Images[31].url
            },{
                uuid: Images[32].uuid,url: Images[32].url
            },{
                uuid: Images[33].uuid,url: Images[33].url
            },{
                uuid: Images[34].uuid,url: Images[34].url
            },{
                uuid: Images[35].uuid,url: Images[35].url
            },{
                uuid: Images[36].uuid,url: Images[36].url
            },{
                uuid: Images[37].uuid,url: Images[37].url
            },{
                uuid: Images[38].uuid,url: Images[38].url
            },{
                uuid: Images[39].uuid,url: Images[39].url
            },{
                uuid: Images[40].uuid,url: Images[40].url
            },{
                uuid: Images[41].uuid,url: Images[41].url
            },{
                uuid: Images[42].uuid,url: Images[42].url
            },{
                uuid: Images[43].uuid,url: Images[43].url
            },{
                uuid: Images[44].uuid,url: Images[44].url
            },{
                uuid: Images[45].uuid,url: Images[45].url
            },{
                uuid: Images[46].uuid,url: Images[46].url
            },{
                uuid: Images[47].uuid,url: Images[47].url
            },{
                uuid: Images[48].uuid,url: Images[48].url
            },{
                uuid: Images[49].uuid,url: Images[49].url
            },{
                uuid: Images[50].uuid,url: Images[50].url
            },{
                uuid: Images[51].uuid,url: Images[51].url
            },{
                uuid: Images[52].uuid,url: Images[52].url
            }
    
        ],


    })
})

app.get('/blog/blogview', (req, res) => {
    res.render('blogView', {
        
    })
})

app.get('*', (req, res) => {
    res.render('Error', {
        
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})