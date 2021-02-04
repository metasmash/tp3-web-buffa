import { createStyles, makeStyles } from '@material-ui/core/styles'

export const rootMyHobbies = {
    textAlign: 'center',
}

export const rootList = {
    margin: 'auto',
    textAlign: 'center',
}

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: '#a4a4a430',
        },
    })
)
