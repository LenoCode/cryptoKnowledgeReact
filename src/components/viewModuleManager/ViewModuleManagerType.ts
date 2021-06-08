

export interface ModuleViewControls{
    viewControl:{
        changeViewSubPage:Function
    },
}

export interface ModuleMetaProps<ContextProps> {
    name: string;
    MainComponent:React.FunctionComponent<ModuleViewControls>
    Component:React.FunctionComponent<ModuleViewControls>
    contextValues:ContextProps
}

export interface ViewModuleManagerProps{
    module:ModuleMetaProps<any>
}