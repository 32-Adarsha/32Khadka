enum theme {
  Dark,
  Light
}

export class DisplaySetting {
  fontsize: number = 12;
  theme : theme = theme.Light;
  fonttype : string = 'default'
}
