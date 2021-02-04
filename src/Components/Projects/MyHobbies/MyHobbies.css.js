import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const rootMyHobbies = {
    textAlign: 'center',
}

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            margin: 'auto',
            maxWidth: 360,
            backgroundColor: '#a4a4a430',
        },
    })
)
