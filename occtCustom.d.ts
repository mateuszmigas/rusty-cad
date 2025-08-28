export declare class TDF_Label {
  constructor()
  Nullify(): void;
  Data(): Handle_TDF_Data;
  Tag(): Graphic3d_ZLayerId;
  Father(): TDF_Label;
  IsNull(): Standard_Boolean;
  Imported(aStatus: Standard_Boolean): void;
  IsImported(): Standard_Boolean;
  IsEqual(aLabel: TDF_Label): Standard_Boolean;
  IsDifferent(aLabel: TDF_Label): Standard_Boolean;
  IsRoot(): Standard_Boolean;
  IsAttribute(anID: Standard_GUID): Standard_Boolean;
  AddAttribute(anAttribute: Handle_TDF_Attribute, append: Standard_Boolean): void;
  ForgetAttribute_1(anAttribute: Handle_TDF_Attribute): void;
  ForgetAttribute_2(aguid: Standard_GUID): Standard_Boolean;
  ForgetAllAttributes(clearChildren: Standard_Boolean): void;
  ResumeAttribute(anAttribute: Handle_TDF_Attribute): void;
  FindAttribute_1(anID: Standard_GUID, anAttribute: Handle_TDF_Attribute): Standard_Boolean;
  FindAttribute_3(anID: Standard_GUID, aTransaction: Graphic3d_ZLayerId, anAttribute: Handle_TDF_Attribute): Standard_Boolean;
  MayBeModified(): Standard_Boolean;
  AttributesModified(): Standard_Boolean;
  HasAttribute(): Standard_Boolean;
  NbAttributes(): Graphic3d_ZLayerId;
  Depth(): Graphic3d_ZLayerId;
  IsDescendant(aLabel: TDF_Label): Standard_Boolean;
  Root(): TDF_Label;
  HasChild(): Standard_Boolean;
  NbChildren(): Graphic3d_ZLayerId;
  FindChild(aTag: Graphic3d_ZLayerId, create: Standard_Boolean): TDF_Label;
  NewChild(): TDF_Label;
  Transaction(): Graphic3d_ZLayerId;
  HasLowerNode(otherLabel: TDF_Label): Standard_Boolean;
  HasGreaterNode(otherLabel: TDF_Label): Standard_Boolean;
  ExtendedDump(anOS: Standard_OStream, aFilter: TDF_IDFilter, aMap: TDF_AttributeIndexedMap): void;
  EntryDump(anOS: Standard_OStream): void;
  delete(): void;
}

export declare class TDF_Attribute extends Standard_Transient {
  ID(): Standard_GUID;
  SetID_1(a0: Standard_GUID): void;
  SetID_2(): void;
  Label(): TDF_Label;
  Transaction(): Graphic3d_ZLayerId;
  UntilTransaction(): Graphic3d_ZLayerId;
  IsValid(): Standard_Boolean;
  IsNew(): Standard_Boolean;
  IsForgotten(): Standard_Boolean;
  IsAttribute(anID: Standard_GUID): Standard_Boolean;
  FindAttribute_1(anID: Standard_GUID, anAttribute: Handle_TDF_Attribute): Standard_Boolean;
  AddAttribute(other: Handle_TDF_Attribute): void;
  ForgetAttribute(aguid: Standard_GUID): Standard_Boolean;
  ForgetAllAttributes(clearChildren: Standard_Boolean): void;
  AfterAddition(): void;
  BeforeRemoval(): void;
  BeforeForget(): void;
  AfterResume(): void;
  AfterRetrieval(forceIt: Standard_Boolean): Standard_Boolean;
  BeforeUndo(anAttDelta: Handle_TDF_AttributeDelta, forceIt: Standard_Boolean): Standard_Boolean;
  AfterUndo(anAttDelta: Handle_TDF_AttributeDelta, forceIt: Standard_Boolean): Standard_Boolean;
  BeforeCommitTransaction(): void;
  Backup_1(): void;
  IsBackuped(): Standard_Boolean;
  BackupCopy(): Handle_TDF_Attribute;
  Restore(anAttribute: Handle_TDF_Attribute): void;
  DeltaOnAddition(): Handle_TDF_DeltaOnAddition;
  DeltaOnForget(): Handle_TDF_DeltaOnForget;
  DeltaOnResume(): Handle_TDF_DeltaOnResume;
  DeltaOnModification_1(anOldAttribute: Handle_TDF_Attribute): Handle_TDF_DeltaOnModification;
  DeltaOnModification_2(aDelta: Handle_TDF_DeltaOnModification): void;
  DeltaOnRemoval(): Handle_TDF_DeltaOnRemoval;
  NewEmpty(): Handle_TDF_Attribute;
  Paste(intoAttribute: Handle_TDF_Attribute, aRelocationTable: Handle_TDF_RelocationTable): void;
  References(aDataSet: Handle_TDF_DataSet): void;
  ExtendedDump(anOS: Standard_OStream, aFilter: TDF_IDFilter, aMap: TDF_AttributeIndexedMap): void;
  Forget(aTransaction: Graphic3d_ZLayerId): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class TDF_LabelSequence extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  static delNode(theNode: NCollection_SeqNode, theAl: Handle_NCollection_BaseAllocator): void;
  Clear(theAllocator: Handle_NCollection_BaseAllocator): void;
  Assign(theOther: TDF_LabelSequence): TDF_LabelSequence;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: TDF_Label): void;
  Append_2(theSeq: TDF_LabelSequence): void;
  Prepend_1(theItem: TDF_Label): void;
  Prepend_2(theSeq: TDF_LabelSequence): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: TDF_Label): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TDF_LabelSequence): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TDF_LabelSequence): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: TDF_Label): void;
  Split(theIndex: Standard_Integer, theSeq: TDF_LabelSequence): void;
  First(): TDF_Label;
  ChangeFirst(): TDF_Label;
  Last(): TDF_Label;
  ChangeLast(): TDF_Label;
  Value(theIndex: Standard_Integer): TDF_Label;
  ChangeValue(theIndex: Standard_Integer): TDF_Label;
  SetValue(theIndex: Standard_Integer, theItem: TDF_Label): void;
  delete(): void;
}

  export declare class TDF_LabelSequence_1 extends TDF_LabelSequence {
    constructor();
  }

  export declare class TDF_LabelSequence_2 extends TDF_LabelSequence {
    constructor(theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TDF_LabelSequence_3 extends TDF_LabelSequence {
    constructor(theOther: TDF_LabelSequence);
  }

export declare class NCollection_BaseSequence {
  IsEmpty(): Standard_Boolean;
  Length(): Graphic3d_ZLayerId;
  Allocator(): Handle_NCollection_BaseAllocator;
  delete(): void;
}

export declare class NCollection_BaseMap {
  NbBuckets(): Graphic3d_ZLayerId;
  Extent(): Graphic3d_ZLayerId;
  IsEmpty(): Standard_Boolean;
  Statistics(S: Standard_OStream): void;
  Allocator(): Handle_NCollection_BaseAllocator;
  delete(): void;
}

export declare class STEPCAFControl_Reader {
  Init(WS: Handle_XSControl_WorkSession, scratch: Standard_Boolean): void;
  ReadFile(filename: Standard_CString): IFSelect_ReturnStatus;
  NbRootsForTransfer(): Graphic3d_ZLayerId;
  TransferOneRoot(num: Graphic3d_ZLayerId, doc: Handle_TDocStd_Document, theProgress: Message_ProgressRange): Standard_Boolean;
  Transfer_1(doc: Handle_TDocStd_Document, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_1(filename: XCAFDoc_PartId, doc: Handle_TDocStd_Document, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_2(filename: Standard_CString, doc: Handle_TDocStd_Document, theProgress: Message_ProgressRange): Standard_Boolean;
  ExternFiles(): any;
  ExternFile(name: Standard_CString, ef: Handle_STEPCAFControl_ExternFile): Standard_Boolean;
  ChangeReader(): STEPControl_Reader;
  Reader(): STEPControl_Reader;
  static FindInstance(NAUO: Handle_StepRepr_NextAssemblyUsageOccurrence, STool: Handle_XCAFDoc_ShapeTool, Tool: STEPConstruct_Tool, ShapeLabelMap: XCAFDoc_DataMapOfShapeLabel): TDF_Label;
  SetColorMode(colormode: Standard_Boolean): void;
  GetColorMode(): Standard_Boolean;
  SetNameMode(namemode: Standard_Boolean): void;
  GetNameMode(): Standard_Boolean;
  SetLayerMode(layermode: Standard_Boolean): void;
  GetLayerMode(): Standard_Boolean;
  SetPropsMode(propsmode: Standard_Boolean): void;
  GetPropsMode(): Standard_Boolean;
  SetSHUOMode(shuomode: Standard_Boolean): void;
  GetSHUOMode(): Standard_Boolean;
  SetGDTMode(gdtmode: Standard_Boolean): void;
  GetGDTMode(): Standard_Boolean;
  SetMatMode(matmode: Standard_Boolean): void;
  GetMatMode(): Standard_Boolean;
  SetViewMode(viewmode: Standard_Boolean): void;
  GetViewMode(): Standard_Boolean;
  GetShapeLabelMap(): XCAFDoc_DataMapOfShapeLabel;
  delete(): void;
}

  export declare class STEPCAFControl_Reader_1 extends STEPCAFControl_Reader {
    constructor();
  }

  export declare class STEPCAFControl_Reader_2 extends STEPCAFControl_Reader {
    constructor(WS: Handle_XSControl_WorkSession, scratch: Standard_Boolean);
  }

export declare class BRepAlgoAPI_BuilderAlgo extends BRepAlgoAPI_Algo {
  SetArguments(theLS: TopTools_ListOfShape): void;
  Arguments(): TopTools_ListOfShape;
  SetNonDestructive(theFlag: Standard_Boolean): void;
  NonDestructive(): Standard_Boolean;
  SetGlue(theGlue: BOPAlgo_GlueEnum): void;
  Glue(): BOPAlgo_GlueEnum;
  SetCheckInverted(theCheck: Standard_Boolean): void;
  CheckInverted(): Standard_Boolean;
  Build(theRange: Message_ProgressRange): void;
  SimplifyResult(theUnifyEdges: Standard_Boolean, theUnifyFaces: Standard_Boolean, theAngularTol: Standard_Real): void;
  Modified(theS: TopoDS_Shape): TopTools_ListOfShape;
  Generated(theS: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(aS: TopoDS_Shape): Standard_Boolean;
  HasModified(): Standard_Boolean;
  HasGenerated(): Standard_Boolean;
  HasDeleted(): Standard_Boolean;
  SetToFillHistory(theHistFlag: Standard_Boolean): void;
  HasHistory(): Standard_Boolean;
  SectionEdges(): TopTools_ListOfShape;
  DSFiller(): BOPAlgo_PPaveFiller;
  Builder(): BOPAlgo_PBuilder;
  History(): Handle_BRepTools_History;
  delete(): void;
}

  export declare class BRepAlgoAPI_BuilderAlgo_1 extends BRepAlgoAPI_BuilderAlgo {
    constructor();
  }

  export declare class BRepAlgoAPI_BuilderAlgo_2 extends BRepAlgoAPI_BuilderAlgo {
    constructor(thePF: BOPAlgo_PaveFiller);
  }

export declare class BRepAlgoAPI_Cut extends BRepAlgoAPI_BooleanOperation {
  delete(): void;
}

  export declare class BRepAlgoAPI_Cut_1 extends BRepAlgoAPI_Cut {
    constructor();
  }

  export declare class BRepAlgoAPI_Cut_2 extends BRepAlgoAPI_Cut {
    constructor(PF: BOPAlgo_PaveFiller);
  }

  export declare class BRepAlgoAPI_Cut_3 extends BRepAlgoAPI_Cut {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, theRange: Message_ProgressRange);
  }

  export declare class BRepAlgoAPI_Cut_4 extends BRepAlgoAPI_Cut {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, aDSF: BOPAlgo_PaveFiller, bFWD: Standard_Boolean, theRange: Message_ProgressRange);
  }

export declare class BRepAlgoAPI_Algo extends BRepBuilderAPI_MakeShape {
  Shape(): TopoDS_Shape;
  Clear(): void;
  SetRunParallel(theFlag: Standard_Boolean): void;
  RunParallel(): Standard_Boolean;
  SetFuzzyValue(theFuzz: Standard_Real): void;
  FuzzyValue(): Standard_Real;
  HasErrors(): Standard_Boolean;
  HasWarnings(): Standard_Boolean;
  HasError(theType: Handle_Standard_Type): Standard_Boolean;
  HasWarning(theType: Handle_Standard_Type): Standard_Boolean;
  DumpErrors(theOS: Standard_OStream): void;
  DumpWarnings(theOS: Standard_OStream): void;
  ClearWarnings(): void;
  GetReport(): Handle_Message_Report;
  SetUseOBB(theUseOBB: Standard_Boolean): void;
  delete(): void;
}

export declare class BRepAlgoAPI_BooleanOperation extends BRepAlgoAPI_BuilderAlgo {
  Shape1(): TopoDS_Shape;
  Shape2(): TopoDS_Shape;
  SetTools(theLS: TopTools_ListOfShape): void;
  Tools(): TopTools_ListOfShape;
  SetOperation(theBOP: BOPAlgo_Operation): void;
  Operation(): BOPAlgo_Operation;
  Build(theRange: Message_ProgressRange): void;
  delete(): void;
}

  export declare class BRepAlgoAPI_BooleanOperation_1 extends BRepAlgoAPI_BooleanOperation {
    constructor();
  }

  export declare class BRepAlgoAPI_BooleanOperation_2 extends BRepAlgoAPI_BooleanOperation {
    constructor(thePF: BOPAlgo_PaveFiller);
  }

export declare class CDM_Document extends Standard_Transient {
  Update_1(aToDocument: Handle_CDM_Document, aReferenceIdentifier: Graphic3d_ZLayerId, aModifContext: Standard_Address): void;
  Update_2(ErrorString: TCollection_ExtendedString): Standard_Boolean;
  StorageFormat(): TCollection_ExtendedString;
  Extensions(Extensions: TColStd_SequenceOfExtendedString): void;
  GetAlternativeDocument(aFormat: TCollection_ExtendedString, anAlternativeDocument: Handle_CDM_Document): Standard_Boolean;
  CreateReference_1(anOtherDocument: Handle_CDM_Document): Graphic3d_ZLayerId;
  RemoveReference(aReferenceIdentifier: Graphic3d_ZLayerId): void;
  RemoveAllReferences(): void;
  Document(aReferenceIdentifier: Graphic3d_ZLayerId): Handle_CDM_Document;
  IsInSession(aReferenceIdentifier: Graphic3d_ZLayerId): Standard_Boolean;
  IsStored_1(aReferenceIdentifier: Graphic3d_ZLayerId): Standard_Boolean;
  Name(aReferenceIdentifier: Graphic3d_ZLayerId): TCollection_ExtendedString;
  UpdateFromDocuments(aModifContext: Standard_Address): void;
  ToReferencesNumber(): Graphic3d_ZLayerId;
  FromReferencesNumber(): Graphic3d_ZLayerId;
  ShallowReferences(aDocument: Handle_CDM_Document): Standard_Boolean;
  DeepReferences(aDocument: Handle_CDM_Document): Standard_Boolean;
  CopyReference(aFromDocument: Handle_CDM_Document, aReferenceIdentifier: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  IsReadOnly_1(): Standard_Boolean;
  IsReadOnly_2(aReferenceIdentifier: Graphic3d_ZLayerId): Standard_Boolean;
  SetIsReadOnly(): void;
  UnsetIsReadOnly(): void;
  Modify(): void;
  Modifications(): Graphic3d_ZLayerId;
  UnModify(): void;
  IsUpToDate(aReferenceIdentifier: Graphic3d_ZLayerId): Standard_Boolean;
  SetIsUpToDate(aReferenceIdentifier: Graphic3d_ZLayerId): void;
  SetComment(aComment: TCollection_ExtendedString): void;
  AddComment(aComment: TCollection_ExtendedString): void;
  SetComments(aComments: TColStd_SequenceOfExtendedString): void;
  Comments(aComments: TColStd_SequenceOfExtendedString): void;
  Comment(): Standard_ExtString;
  IsStored_2(): Standard_Boolean;
  StorageVersion(): Graphic3d_ZLayerId;
  SetMetaData(aMetaData: Handle_CDM_MetaData): void;
  UnsetIsStored(): void;
  MetaData(): Handle_CDM_MetaData;
  Folder(): TCollection_ExtendedString;
  SetRequestedFolder(aFolder: TCollection_ExtendedString): void;
  RequestedFolder(): TCollection_ExtendedString;
  HasRequestedFolder(): Standard_Boolean;
  SetRequestedName(aName: TCollection_ExtendedString): void;
  RequestedName(): TCollection_ExtendedString;
  SetRequestedPreviousVersion(aPreviousVersion: TCollection_ExtendedString): void;
  UnsetRequestedPreviousVersion(): void;
  HasRequestedPreviousVersion(): Standard_Boolean;
  RequestedPreviousVersion(): TCollection_ExtendedString;
  SetRequestedComment(aComment: TCollection_ExtendedString): void;
  RequestedComment(): TCollection_ExtendedString;
  LoadResources(): void;
  FindFileExtension(): Standard_Boolean;
  FileExtension(): TCollection_ExtendedString;
  FindDescription(): Standard_Boolean;
  Description(): TCollection_ExtendedString;
  IsModified(): Standard_Boolean;
  IsOpened_1(): Standard_Boolean;
  Open(anApplication: Handle_CDM_Application): void;
  CanClose(): CDM_CanCloseStatus;
  Close(): void;
  Application(): Handle_CDM_Application;
  CanCloseReference(aDocument: Handle_CDM_Document, aReferenceIdentifier: Graphic3d_ZLayerId): Standard_Boolean;
  CloseReference(aDocument: Handle_CDM_Document, aReferenceIdentifier: Graphic3d_ZLayerId): void;
  IsOpened_2(aReferenceIdentifier: Graphic3d_ZLayerId): Standard_Boolean;
  CreateReference_2(aMetaData: Handle_CDM_MetaData, aReferenceIdentifier: Graphic3d_ZLayerId, anApplication: Handle_CDM_Application, aToDocumentVersion: Graphic3d_ZLayerId, UseStorageConfiguration: Standard_Boolean): void;
  CreateReference_3(aMetaData: Handle_CDM_MetaData, anApplication: Handle_CDM_Application, aDocumentVersion: Graphic3d_ZLayerId, UseStorageConfiguration: Standard_Boolean): Graphic3d_ZLayerId;
  ReferenceCounter(): Graphic3d_ZLayerId;
  Update_3(): void;
  Reference(aReferenceIdentifier: Graphic3d_ZLayerId): Handle_CDM_Reference;
  SetModifications(Modifications: Graphic3d_ZLayerId): void;
  SetReferenceCounter(aReferenceCounter: Graphic3d_ZLayerId): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class Handle_TDocStd_Document {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDocStd_Document): void;
  get(): TDocStd_Document;
  delete(): void;
}

  export declare class Handle_TDocStd_Document_1 extends Handle_TDocStd_Document {
    constructor();
  }

  export declare class Handle_TDocStd_Document_2 extends Handle_TDocStd_Document {
    constructor(thePtr: TDocStd_Document);
  }

  export declare class Handle_TDocStd_Document_3 extends Handle_TDocStd_Document {
    constructor(theHandle: Handle_TDocStd_Document);
  }

  export declare class Handle_TDocStd_Document_4 extends Handle_TDocStd_Document {
    constructor(theHandle: Handle_TDocStd_Document);
  }

export declare class TDocStd_Document extends CDM_Document {
  constructor(astorageformat: TCollection_ExtendedString)
  static Get(L: TDF_Label): Handle_TDocStd_Document;
  IsSaved(): Standard_Boolean;
  IsChanged(): Standard_Boolean;
  SetSaved(): void;
  SetSavedTime(theTime: Graphic3d_ZLayerId): void;
  GetSavedTime(): Graphic3d_ZLayerId;
  GetName(): TCollection_ExtendedString;
  GetPath(): TCollection_ExtendedString;
  SetData(data: Handle_TDF_Data): void;
  GetData(): Handle_TDF_Data;
  Main(): TDF_Label;
  IsEmpty(): Standard_Boolean;
  IsValid(): Standard_Boolean;
  SetModified(L: TDF_Label): void;
  PurgeModified(): void;
  GetModified(): TDF_LabelMap;
  NewCommand(): void;
  HasOpenCommand(): Standard_Boolean;
  OpenCommand(): void;
  CommitCommand(): Standard_Boolean;
  AbortCommand(): void;
  GetUndoLimit(): Graphic3d_ZLayerId;
  SetUndoLimit(L: Graphic3d_ZLayerId): void;
  ClearUndos(): void;
  ClearRedos(): void;
  GetAvailableUndos(): Graphic3d_ZLayerId;
  Undo(): Standard_Boolean;
  GetAvailableRedos(): Graphic3d_ZLayerId;
  Redo(): Standard_Boolean;
  GetUndos(): TDF_DeltaList;
  GetRedos(): TDF_DeltaList;
  RemoveFirstUndo(): void;
  InitDeltaCompaction(): Standard_Boolean;
  PerformDeltaCompaction(): Standard_Boolean;
  UpdateReferences(aDocEntry: XCAFDoc_PartId): void;
  Recompute(): void;
  Update(aToDocument: Handle_CDM_Document, aReferenceIdentifier: Graphic3d_ZLayerId, aModifContext: Standard_Address): void;
  StorageFormat(): TCollection_ExtendedString;
  SetEmptyLabelsSavingMode(isAllowed: Standard_Boolean): void;
  EmptyLabelsSavingMode(): Standard_Boolean;
  ChangeStorageFormat(newStorageFormat: TCollection_ExtendedString): void;
  SetNestedTransactionMode(isAllowed: Standard_Boolean): void;
  IsNestedTransactionMode(): Standard_Boolean;
  SetModificationMode(theTransactionOnly: Standard_Boolean): void;
  ModificationMode(): Standard_Boolean;
  BeforeClose(): void;
  StorageFormatVersion(): TDocStd_FormatVersion;
  ChangeStorageFormatVersion(theVersion: TDocStd_FormatVersion): void;
  static CurrentStorageFormatVersion(): TDocStd_FormatVersion;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare type IFSelect_ReturnStatus = {
  IFSelect_RetVoid: {};
  IFSelect_RetDone: {};
  IFSelect_RetError: {};
  IFSelect_RetFail: {};
  IFSelect_RetStop: {};
}

export declare class TopoDS_Shape {
  constructor()
  IsNull(): Standard_Boolean;
  Nullify(): void;
  Location_1(): TopLoc_Location;
  Location_2(theLoc: TopLoc_Location, theRaiseExc: Standard_Boolean): void;
  Located(theLoc: TopLoc_Location, theRaiseExc: Standard_Boolean): TopoDS_Shape;
  Orientation_1(): TopAbs_Orientation;
  Orientation_2(theOrient: TopAbs_Orientation): void;
  Oriented(theOrient: TopAbs_Orientation): TopoDS_Shape;
  TShape_1(): Handle_TopoDS_TShape;
  ShapeType(): TopAbs_ShapeEnum;
  Free_1(): Standard_Boolean;
  Free_2(theIsFree: Standard_Boolean): void;
  Locked_1(): Standard_Boolean;
  Locked_2(theIsLocked: Standard_Boolean): void;
  Modified_1(): Standard_Boolean;
  Modified_2(theIsModified: Standard_Boolean): void;
  Checked_1(): Standard_Boolean;
  Checked_2(theIsChecked: Standard_Boolean): void;
  Orientable_1(): Standard_Boolean;
  Orientable_2(theIsOrientable: Standard_Boolean): void;
  Closed_1(): Standard_Boolean;
  Closed_2(theIsClosed: Standard_Boolean): void;
  Infinite_1(): Standard_Boolean;
  Infinite_2(theIsInfinite: Standard_Boolean): void;
  Convex_1(): Standard_Boolean;
  Convex_2(theIsConvex: Standard_Boolean): void;
  Move(thePosition: TopLoc_Location, theRaiseExc: Standard_Boolean): void;
  Moved(thePosition: TopLoc_Location, theRaiseExc: Standard_Boolean): TopoDS_Shape;
  Reverse(): void;
  Reversed(): TopoDS_Shape;
  Complement(): void;
  Complemented(): TopoDS_Shape;
  Compose(theOrient: TopAbs_Orientation): void;
  Composed(theOrient: TopAbs_Orientation): TopoDS_Shape;
  NbChildren(): Graphic3d_ZLayerId;
  IsPartner(theOther: TopoDS_Shape): Standard_Boolean;
  IsSame(theOther: TopoDS_Shape): Standard_Boolean;
  IsEqual(theOther: TopoDS_Shape): Standard_Boolean;
  IsNotEqual(theOther: TopoDS_Shape): Standard_Boolean;
  HashCode(theUpperBound: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  EmptyCopy(): void;
  EmptyCopied(): TopoDS_Shape;
  TShape_2(theTShape: Handle_TopoDS_TShape): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  delete(): void;
}

export declare class BRepBuilderAPI_MakeShape extends BRepBuilderAPI_Command {
  Build(theRange: Message_ProgressRange): void;
  Shape(): TopoDS_Shape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  Modified(S: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  delete(): void;
}

export declare class BRepBuilderAPI_Command {
  IsDone(): Standard_Boolean;
  Check(): void;
  delete(): void;
}

export declare class gp_GTrsf {
  SetAffinity_1(theA1: gp_Ax1, theRatio: Standard_Real): void;
  SetAffinity_2(theA2: gp_Ax2, theRatio: Standard_Real): void;
  SetValue(theRow: Graphic3d_ZLayerId, theCol: Graphic3d_ZLayerId, theValue: Standard_Real): void;
  SetVectorialPart(theMatrix: gp_Mat): void;
  SetTranslationPart(theCoord: gp_XYZ): void;
  SetTrsf(theT: gp_Trsf): void;
  IsNegative(): Standard_Boolean;
  IsSingular(): Standard_Boolean;
  Form(): gp_TrsfForm;
  SetForm(): void;
  TranslationPart(): gp_XYZ;
  VectorialPart(): gp_Mat;
  Value(theRow: Graphic3d_ZLayerId, theCol: Graphic3d_ZLayerId): Standard_Real;
  Invert(): void;
  Inverted(): gp_GTrsf;
  Multiplied(theT: gp_GTrsf): gp_GTrsf;
  Multiply(theT: gp_GTrsf): void;
  PreMultiply(theT: gp_GTrsf): void;
  Power(theN: Graphic3d_ZLayerId): void;
  Powered(theN: Graphic3d_ZLayerId): gp_GTrsf;
  Transforms_1(theCoord: gp_XYZ): void;
  Transforms_2(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  Trsf(): gp_Trsf;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  delete(): void;
}

  export declare class gp_GTrsf_1 extends gp_GTrsf {
    constructor();
  }

  export declare class gp_GTrsf_2 extends gp_GTrsf {
    constructor(theT: gp_Trsf);
  }

  export declare class gp_GTrsf_3 extends gp_GTrsf {
    constructor(theM: gp_Mat, theV: gp_XYZ);
  }

export declare class gp_XY {
  SetCoord_1(theIndex: Graphic3d_ZLayerId, theXi: Standard_Real): void;
  SetCoord_2(theX: Standard_Real, theY: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  Coord_1(theIndex: Graphic3d_ZLayerId): Standard_Real;
  ChangeCoord(theIndex: Graphic3d_ZLayerId): Standard_Real;
  Coord_2(theX: Standard_Real, theY: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Modulus(): Standard_Real;
  SquareModulus(): Standard_Real;
  IsEqual(theOther: gp_XY, theTolerance: Standard_Real): Standard_Boolean;
  Add(theOther: gp_XY): void;
  Added(theOther: gp_XY): gp_XY;
  Crossed(theOther: gp_XY): Standard_Real;
  CrossMagnitude(theRight: gp_XY): Standard_Real;
  CrossSquareMagnitude(theRight: gp_XY): Standard_Real;
  Divide(theScalar: Standard_Real): void;
  Divided(theScalar: Standard_Real): gp_XY;
  Dot(theOther: gp_XY): Standard_Real;
  Multiply_1(theScalar: Standard_Real): void;
  Multiply_2(theOther: gp_XY): void;
  Multiply_3(theMatrix: gp_Mat2d): void;
  Multiplied_1(theScalar: Standard_Real): gp_XY;
  Multiplied_2(theOther: gp_XY): gp_XY;
  Multiplied_3(theMatrix: gp_Mat2d): gp_XY;
  Normalize(): void;
  Normalized(): gp_XY;
  Reverse(): void;
  Reversed(): gp_XY;
  SetLinearForm_1(theA1: Standard_Real, theXY1: gp_XY, theA2: Standard_Real, theXY2: gp_XY): void;
  SetLinearForm_2(theA1: Standard_Real, theXY1: gp_XY, theA2: Standard_Real, theXY2: gp_XY, theXY3: gp_XY): void;
  SetLinearForm_3(theA1: Standard_Real, theXY1: gp_XY, theXY2: gp_XY): void;
  SetLinearForm_4(theXY1: gp_XY, theXY2: gp_XY): void;
  Subtract(theOther: gp_XY): void;
  Subtracted(theOther: gp_XY): gp_XY;
  delete(): void;
}

  export declare class gp_XY_1 extends gp_XY {
    constructor();
  }

  export declare class gp_XY_2 extends gp_XY {
    constructor(theX: Standard_Real, theY: Standard_Real);
  }

export declare class gp_Sphere {
  SetLocation(theLoc: gp_Pnt): void;
  SetPosition(theA3: gp_Ax3): void;
  SetRadius(theR: Standard_Real): void;
  Area(): Standard_Real;
  Coefficients(theA1: Standard_Real, theA2: Standard_Real, theA3: Standard_Real, theB1: Standard_Real, theB2: Standard_Real, theB3: Standard_Real, theC1: Standard_Real, theC2: Standard_Real, theC3: Standard_Real, theD: Standard_Real): void;
  UReverse(): void;
  VReverse(): void;
  Direct(): Standard_Boolean;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  Radius(): Standard_Real;
  Volume(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Sphere;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Sphere;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Sphere;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Sphere;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Sphere;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Sphere;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Sphere;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Sphere;
  delete(): void;
}

  export declare class gp_Sphere_1 extends gp_Sphere {
    constructor();
  }

  export declare class gp_Sphere_2 extends gp_Sphere {
    constructor(theA3: gp_Ax3, theRadius: Standard_Real);
  }

export declare class gp_Ax3 {
  XReverse(): void;
  YReverse(): void;
  ZReverse(): void;
  SetAxis(theA1: gp_Ax1): void;
  SetDirection(theV: gp_Dir): void;
  SetLocation(theP: gp_Pnt): void;
  SetXDirection(theVx: gp_Dir): void;
  SetYDirection(theVy: gp_Dir): void;
  Angle(theOther: gp_Ax3): Standard_Real;
  Axis(): gp_Ax1;
  Ax2(): gp_Ax2;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  XDirection(): gp_Dir;
  YDirection(): gp_Dir;
  Direct(): Standard_Boolean;
  IsCoplanar_1(theOther: gp_Ax3, theLinearTolerance: Standard_Real, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsCoplanar_2(theA1: gp_Ax1, theLinearTolerance: Standard_Real, theAngularTolerance: Standard_Real): Standard_Boolean;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Ax3;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Ax3;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Ax3;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Ax3;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Ax3;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Ax3;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Ax3;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Ax3;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class gp_Ax3_1 extends gp_Ax3 {
    constructor();
  }

  export declare class gp_Ax3_2 extends gp_Ax3 {
    constructor(theA: gp_Ax2);
  }

  export declare class gp_Ax3_3 extends gp_Ax3 {
    constructor(theP: gp_Pnt, theN: gp_Dir, theVx: gp_Dir);
  }

  export declare class gp_Ax3_4 extends gp_Ax3 {
    constructor(theP: gp_Pnt, theV: gp_Dir);
  }

export declare class gp_Elips {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theP: gp_Pnt): void;
  SetMajorRadius(theMajorRadius: Standard_Real): void;
  SetMinorRadius(theMinorRadius: Standard_Real): void;
  SetPosition(theA2: gp_Ax2): void;
  Area(): Standard_Real;
  Axis(): gp_Ax1;
  Directrix1(): gp_Ax1;
  Directrix2(): gp_Ax1;
  Eccentricity(): Standard_Real;
  Focal(): Standard_Real;
  Focus1(): gp_Pnt;
  Focus2(): gp_Pnt;
  Location(): gp_Pnt;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  Parameter(): Standard_Real;
  Position(): gp_Ax2;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Elips;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Elips;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Elips;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Elips;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Elips;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Elips;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Elips;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Elips;
  delete(): void;
}

  export declare class gp_Elips_1 extends gp_Elips {
    constructor();
  }

  export declare class gp_Elips_2 extends gp_Elips {
    constructor(theA2: gp_Ax2, theMajorRadius: Standard_Real, theMinorRadius: Standard_Real);
  }

export declare class gp_Pnt {
  SetCoord_1(theIndex: Graphic3d_ZLayerId, theXi: Standard_Real): void;
  SetCoord_2(theXp: Standard_Real, theYp: Standard_Real, theZp: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetZ(theZ: Standard_Real): void;
  SetXYZ(theCoord: gp_XYZ): void;
  Coord_1(theIndex: Graphic3d_ZLayerId): Standard_Real;
  Coord_2(theXp: Standard_Real, theYp: Standard_Real, theZp: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  XYZ(): gp_XYZ;
  Coord_3(): gp_XYZ;
  ChangeCoord(): gp_XYZ;
  BaryCenter(theAlpha: Standard_Real, theP: gp_Pnt, theBeta: Standard_Real): void;
  IsEqual(theOther: gp_Pnt, theLinearTolerance: Standard_Real): Standard_Boolean;
  Distance(theOther: gp_Pnt): Standard_Real;
  SquareDistance(theOther: gp_Pnt): Standard_Real;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Pnt;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Pnt;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Pnt;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Pnt;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Pnt;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Pnt;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Pnt;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Pnt;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class gp_Pnt_1 extends gp_Pnt {
    constructor();
  }

  export declare class gp_Pnt_2 extends gp_Pnt {
    constructor(theCoord: gp_XYZ);
  }

  export declare class gp_Pnt_3 extends gp_Pnt {
    constructor(theXp: Standard_Real, theYp: Standard_Real, theZp: Standard_Real);
  }

export declare class gp_XYZ {
  SetCoord_1(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  SetCoord_2(theIndex: Graphic3d_ZLayerId, theXi: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetZ(theZ: Standard_Real): void;
  Coord_1(theIndex: Graphic3d_ZLayerId): Standard_Real;
  ChangeCoord(theIndex: Graphic3d_ZLayerId): Standard_Real;
  Coord_2(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  GetData(): Standard_Real;
  ChangeData(): Standard_Real;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  Modulus(): Standard_Real;
  SquareModulus(): Standard_Real;
  IsEqual(theOther: gp_XYZ, theTolerance: Standard_Real): Standard_Boolean;
  Add(theOther: gp_XYZ): void;
  Added(theOther: gp_XYZ): gp_XYZ;
  Cross(theOther: gp_XYZ): void;
  Crossed(theOther: gp_XYZ): gp_XYZ;
  CrossMagnitude(theRight: gp_XYZ): Standard_Real;
  CrossSquareMagnitude(theRight: gp_XYZ): Standard_Real;
  CrossCross(theCoord1: gp_XYZ, theCoord2: gp_XYZ): void;
  CrossCrossed(theCoord1: gp_XYZ, theCoord2: gp_XYZ): gp_XYZ;
  Divide(theScalar: Standard_Real): void;
  Divided(theScalar: Standard_Real): gp_XYZ;
  Dot(theOther: gp_XYZ): Standard_Real;
  DotCross(theCoord1: gp_XYZ, theCoord2: gp_XYZ): Standard_Real;
  Multiply_1(theScalar: Standard_Real): void;
  Multiply_2(theOther: gp_XYZ): void;
  Multiply_3(theMatrix: gp_Mat): void;
  Multiplied_1(theScalar: Standard_Real): gp_XYZ;
  Multiplied_2(theOther: gp_XYZ): gp_XYZ;
  Multiplied_3(theMatrix: gp_Mat): gp_XYZ;
  Normalize(): void;
  Normalized(): gp_XYZ;
  Reverse(): void;
  Reversed(): gp_XYZ;
  Subtract(theOther: gp_XYZ): void;
  Subtracted(theOther: gp_XYZ): gp_XYZ;
  SetLinearForm_1(theA1: Standard_Real, theXYZ1: gp_XYZ, theA2: Standard_Real, theXYZ2: gp_XYZ, theA3: Standard_Real, theXYZ3: gp_XYZ, theXYZ4: gp_XYZ): void;
  SetLinearForm_2(theA1: Standard_Real, theXYZ1: gp_XYZ, theA2: Standard_Real, theXYZ2: gp_XYZ, theA3: Standard_Real, theXYZ3: gp_XYZ): void;
  SetLinearForm_3(theA1: Standard_Real, theXYZ1: gp_XYZ, theA2: Standard_Real, theXYZ2: gp_XYZ, theXYZ3: gp_XYZ): void;
  SetLinearForm_4(theA1: Standard_Real, theXYZ1: gp_XYZ, theA2: Standard_Real, theXYZ2: gp_XYZ): void;
  SetLinearForm_5(theA1: Standard_Real, theXYZ1: gp_XYZ, theXYZ2: gp_XYZ): void;
  SetLinearForm_6(theXYZ1: gp_XYZ, theXYZ2: gp_XYZ): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class gp_XYZ_1 extends gp_XYZ {
    constructor();
  }

  export declare class gp_XYZ_2 extends gp_XYZ {
    constructor(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real);
  }

export declare class gp_Circ {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theP: gp_Pnt): void;
  SetPosition(theA2: gp_Ax2): void;
  SetRadius(theRadius: Standard_Real): void;
  Area(): Standard_Real;
  Axis(): gp_Ax1;
  Length(): Standard_Real;
  Location(): gp_Pnt;
  Position(): gp_Ax2;
  Radius(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Distance(theP: gp_Pnt): Standard_Real;
  SquareDistance(theP: gp_Pnt): Standard_Real;
  Contains(theP: gp_Pnt, theLinearTolerance: Standard_Real): Standard_Boolean;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Circ;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Circ;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Circ;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Circ;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Circ;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Circ;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Circ;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Circ;
  delete(): void;
}

  export declare class gp_Circ_1 extends gp_Circ {
    constructor();
  }

  export declare class gp_Circ_2 extends gp_Circ {
    constructor(theA2: gp_Ax2, theRadius: Standard_Real);
  }

export declare class gp_Dir {
  SetCoord_1(theIndex: Graphic3d_ZLayerId, theXi: Standard_Real): void;
  SetCoord_2(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetZ(theZ: Standard_Real): void;
  SetXYZ(theCoord: gp_XYZ): void;
  Coord_1(theIndex: Graphic3d_ZLayerId): Standard_Real;
  Coord_2(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  XYZ(): gp_XYZ;
  IsEqual(theOther: gp_Dir, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsNormal(theOther: gp_Dir, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(theOther: gp_Dir, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(theOther: gp_Dir, theAngularTolerance: Standard_Real): Standard_Boolean;
  Angle(theOther: gp_Dir): Standard_Real;
  AngleWithRef(theOther: gp_Dir, theVRef: gp_Dir): Standard_Real;
  Cross(theRight: gp_Dir): void;
  Crossed(theRight: gp_Dir): gp_Dir;
  CrossCross(theV1: gp_Dir, theV2: gp_Dir): void;
  CrossCrossed(theV1: gp_Dir, theV2: gp_Dir): gp_Dir;
  Dot(theOther: gp_Dir): Standard_Real;
  DotCross(theV1: gp_Dir, theV2: gp_Dir): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Dir;
  Mirror_1(theV: gp_Dir): void;
  Mirrored_1(theV: gp_Dir): gp_Dir;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Dir;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Dir;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Dir;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Dir;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class gp_Dir_1 extends gp_Dir {
    constructor();
  }

  export declare class gp_Dir_2 extends gp_Dir {
    constructor(theV: gp_Vec);
  }

  export declare class gp_Dir_3 extends gp_Dir {
    constructor(theCoord: gp_XYZ);
  }

  export declare class gp_Dir_4 extends gp_Dir {
    constructor(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real);
  }

export declare class gp_Ax1 {
  SetDirection(theV: gp_Dir): void;
  SetLocation(theP: gp_Pnt): void;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  IsCoaxial(Other: gp_Ax1, AngularTolerance: Standard_Real, LinearTolerance: Standard_Real): Standard_Boolean;
  IsNormal(theOther: gp_Ax1, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(theOther: gp_Ax1, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(theOther: gp_Ax1, theAngularTolerance: Standard_Real): Standard_Boolean;
  Angle(theOther: gp_Ax1): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Ax1;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Ax1;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Ax1;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Ax1;
  Rotate(theA1: gp_Ax1, theAngRad: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAngRad: Standard_Real): gp_Ax1;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Ax1;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Ax1;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Ax1;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Ax1;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class gp_Ax1_1 extends gp_Ax1 {
    constructor();
  }

  export declare class gp_Ax1_2 extends gp_Ax1 {
    constructor(theP: gp_Pnt, theV: gp_Dir);
  }

export declare class gp_Cylinder {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theLoc: gp_Pnt): void;
  SetPosition(theA3: gp_Ax3): void;
  SetRadius(theR: Standard_Real): void;
  UReverse(): void;
  VReverse(): void;
  Direct(): Standard_Boolean;
  Axis(): gp_Ax1;
  Coefficients(theA1: Standard_Real, theA2: Standard_Real, theA3: Standard_Real, theB1: Standard_Real, theB2: Standard_Real, theB3: Standard_Real, theC1: Standard_Real, theC2: Standard_Real, theC3: Standard_Real, theD: Standard_Real): void;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  Radius(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Cylinder;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Cylinder;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Cylinder;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Cylinder;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Cylinder;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Cylinder;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Cylinder;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Cylinder;
  delete(): void;
}

  export declare class gp_Cylinder_1 extends gp_Cylinder {
    constructor();
  }

  export declare class gp_Cylinder_2 extends gp_Cylinder {
    constructor(theA3: gp_Ax3, theRadius: Standard_Real);
  }

export declare class gp_Ax2 {
  SetAxis(A1: gp_Ax1): void;
  SetDirection(V: gp_Dir): void;
  SetLocation(theP: gp_Pnt): void;
  SetXDirection(theVx: gp_Dir): void;
  SetYDirection(theVy: gp_Dir): void;
  Angle(theOther: gp_Ax2): Standard_Real;
  Axis(): gp_Ax1;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  XDirection(): gp_Dir;
  YDirection(): gp_Dir;
  IsCoplanar_1(Other: gp_Ax2, LinearTolerance: Standard_Real, AngularTolerance: Standard_Real): Standard_Boolean;
  IsCoplanar_2(A1: gp_Ax1, LinearTolerance: Standard_Real, AngularTolerance: Standard_Real): Standard_Boolean;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Ax2;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Ax2;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Ax2;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Ax2;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Ax2;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Ax2;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Ax2;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Ax2;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class gp_Ax2_1 extends gp_Ax2 {
    constructor();
  }

  export declare class gp_Ax2_2 extends gp_Ax2 {
    constructor(P: gp_Pnt, N: gp_Dir, Vx: gp_Dir);
  }

  export declare class gp_Ax2_3 extends gp_Ax2 {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

export declare class gp_Vec {
  SetCoord_1(theIndex: Graphic3d_ZLayerId, theXi: Standard_Real): void;
  SetCoord_2(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetZ(theZ: Standard_Real): void;
  SetXYZ(theCoord: gp_XYZ): void;
  Coord_1(theIndex: Graphic3d_ZLayerId): Standard_Real;
  Coord_2(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  XYZ(): gp_XYZ;
  IsEqual(theOther: gp_Vec, theLinearTolerance: Standard_Real, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsNormal(theOther: gp_Vec, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(theOther: gp_Vec, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(theOther: gp_Vec, theAngularTolerance: Standard_Real): Standard_Boolean;
  Angle(theOther: gp_Vec): Standard_Real;
  AngleWithRef(theOther: gp_Vec, theVRef: gp_Vec): Standard_Real;
  Magnitude(): Standard_Real;
  SquareMagnitude(): Standard_Real;
  Add(theOther: gp_Vec): void;
  Added(theOther: gp_Vec): gp_Vec;
  Subtract(theRight: gp_Vec): void;
  Subtracted(theRight: gp_Vec): gp_Vec;
  Multiply(theScalar: Standard_Real): void;
  Multiplied(theScalar: Standard_Real): gp_Vec;
  Divide(theScalar: Standard_Real): void;
  Divided(theScalar: Standard_Real): gp_Vec;
  Cross(theRight: gp_Vec): void;
  Crossed(theRight: gp_Vec): gp_Vec;
  CrossMagnitude(theRight: gp_Vec): Standard_Real;
  CrossSquareMagnitude(theRight: gp_Vec): Standard_Real;
  CrossCross(theV1: gp_Vec, theV2: gp_Vec): void;
  CrossCrossed(theV1: gp_Vec, theV2: gp_Vec): gp_Vec;
  Dot(theOther: gp_Vec): Standard_Real;
  DotCross(theV1: gp_Vec, theV2: gp_Vec): Standard_Real;
  Normalize(): void;
  Normalized(): gp_Vec;
  Reverse(): void;
  Reversed(): gp_Vec;
  SetLinearForm_1(theA1: Standard_Real, theV1: gp_Vec, theA2: Standard_Real, theV2: gp_Vec, theA3: Standard_Real, theV3: gp_Vec, theV4: gp_Vec): void;
  SetLinearForm_2(theA1: Standard_Real, theV1: gp_Vec, theA2: Standard_Real, theV2: gp_Vec, theA3: Standard_Real, theV3: gp_Vec): void;
  SetLinearForm_3(theA1: Standard_Real, theV1: gp_Vec, theA2: Standard_Real, theV2: gp_Vec, theV3: gp_Vec): void;
  SetLinearForm_4(theA1: Standard_Real, theV1: gp_Vec, theA2: Standard_Real, theV2: gp_Vec): void;
  SetLinearForm_5(theA1: Standard_Real, theV1: gp_Vec, theV2: gp_Vec): void;
  SetLinearForm_6(theV1: gp_Vec, theV2: gp_Vec): void;
  Mirror_1(theV: gp_Vec): void;
  Mirrored_1(theV: gp_Vec): gp_Vec;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Vec;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Vec;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Vec;
  Scale(theS: Standard_Real): void;
  Scaled(theS: Standard_Real): gp_Vec;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Vec;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  delete(): void;
}

  export declare class gp_Vec_1 extends gp_Vec {
    constructor();
  }

  export declare class gp_Vec_2 extends gp_Vec {
    constructor(theV: gp_Dir);
  }

  export declare class gp_Vec_3 extends gp_Vec {
    constructor(theCoord: gp_XYZ);
  }

  export declare class gp_Vec_4 extends gp_Vec {
    constructor(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real);
  }

  export declare class gp_Vec_5 extends gp_Vec {
    constructor(theP1: gp_Pnt, theP2: gp_Pnt);
  }

export declare class gp_Trsf {
  SetMirror_1(theP: gp_Pnt): void;
  SetMirror_2(theA1: gp_Ax1): void;
  SetMirror_3(theA2: gp_Ax2): void;
  SetRotation_1(theA1: gp_Ax1, theAng: Standard_Real): void;
  SetRotation_2(theR: gp_Quaternion): void;
  SetRotationPart(theR: gp_Quaternion): void;
  SetScale(theP: gp_Pnt, theS: Standard_Real): void;
  SetDisplacement(theFromSystem1: gp_Ax3, theToSystem2: gp_Ax3): void;
  SetTransformation_1(theFromSystem1: gp_Ax3, theToSystem2: gp_Ax3): void;
  SetTransformation_2(theToSystem: gp_Ax3): void;
  SetTransformation_3(R: gp_Quaternion, theT: gp_Vec): void;
  SetTranslation_1(theV: gp_Vec): void;
  SetTranslation_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  SetTranslationPart(theV: gp_Vec): void;
  SetScaleFactor(theS: Standard_Real): void;
  SetForm(theP: gp_TrsfForm): void;
  SetValues(a11: Standard_Real, a12: Standard_Real, a13: Standard_Real, a14: Standard_Real, a21: Standard_Real, a22: Standard_Real, a23: Standard_Real, a24: Standard_Real, a31: Standard_Real, a32: Standard_Real, a33: Standard_Real, a34: Standard_Real): void;
  IsNegative(): Standard_Boolean;
  Form(): gp_TrsfForm;
  ScaleFactor(): Standard_Real;
  TranslationPart(): gp_XYZ;
  GetRotation_1(theAxis: gp_XYZ, theAngle: Standard_Real): Standard_Boolean;
  GetRotation_2(): gp_Quaternion;
  VectorialPart(): gp_Mat;
  HVectorialPart(): gp_Mat;
  Value(theRow: Graphic3d_ZLayerId, theCol: Graphic3d_ZLayerId): Standard_Real;
  Invert(): void;
  Inverted(): gp_Trsf;
  Multiplied(theT: gp_Trsf): gp_Trsf;
  Multiply(theT: gp_Trsf): void;
  PreMultiply(theT: gp_Trsf): void;
  Power(theN: Graphic3d_ZLayerId): void;
  Powered(theN: Graphic3d_ZLayerId): gp_Trsf;
  Transforms_1(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  Transforms_2(theCoord: gp_XYZ): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  InitFromJson(theSStream: Standard_SStream, theStreamPos: Graphic3d_ZLayerId): Standard_Boolean;
  delete(): void;
}

  export declare class gp_Trsf_1 extends gp_Trsf {
    constructor();
  }

  export declare class gp_Trsf_2 extends gp_Trsf {
    constructor(theT: gp_Trsf2d);
  }

export declare class TDataStd_GenericEmpty extends TDF_Attribute {
  Restore(a0: Handle_TDF_Attribute): void;
  Paste(a0: Handle_TDF_Attribute, a1: Handle_TDF_RelocationTable): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class BRepTools {
  constructor();
  static UVBounds_1(F: TopoDS_Face, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  static UVBounds_2(F: TopoDS_Face, W: TopoDS_Wire, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  static UVBounds_3(F: TopoDS_Face, E: TopoDS_Edge, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  static AddUVBounds_1(F: TopoDS_Face, B: Bnd_Box2d): void;
  static AddUVBounds_2(F: TopoDS_Face, W: TopoDS_Wire, B: Bnd_Box2d): void;
  static AddUVBounds_3(F: TopoDS_Face, E: TopoDS_Edge, B: Bnd_Box2d): void;
  static Update_1(V: TopoDS_Vertex): void;
  static Update_2(E: TopoDS_Edge): void;
  static Update_3(W: TopoDS_Wire): void;
  static Update_4(F: TopoDS_Face): void;
  static Update_5(S: TopoDS_Shell): void;
  static Update_6(S: TopoDS_Solid): void;
  static Update_7(C: TopoDS_CompSolid): void;
  static Update_8(C: TopoDS_Compound): void;
  static Update_9(S: TopoDS_Shape): void;
  static UpdateFaceUVPoints(theF: TopoDS_Face): void;
  static Clean(theShape: TopoDS_Shape, theForce: Standard_Boolean): void;
  static CleanGeometry(theShape: TopoDS_Shape): void;
  static RemoveUnusedPCurves(S: TopoDS_Shape): void;
  static Triangulation(theShape: TopoDS_Shape, theLinDefl: Standard_Real, theToCheckFreeEdges: Standard_Boolean): Standard_Boolean;
  static LoadTriangulation(theShape: TopoDS_Shape, theTriangulationIdx: Graphic3d_ZLayerId, theToSetAsActive: Standard_Boolean, theFileSystem: any): Standard_Boolean;
  static UnloadTriangulation(theShape: TopoDS_Shape, theTriangulationIdx: Graphic3d_ZLayerId): Standard_Boolean;
  static ActivateTriangulation(theShape: TopoDS_Shape, theTriangulationIdx: Graphic3d_ZLayerId, theToActivateStrictly: Standard_Boolean): Standard_Boolean;
  static LoadAllTriangulations(theShape: TopoDS_Shape, theFileSystem: any): Standard_Boolean;
  static UnloadAllTriangulations(theShape: TopoDS_Shape): Standard_Boolean;
  static Compare_1(V1: TopoDS_Vertex, V2: TopoDS_Vertex): Standard_Boolean;
  static Compare_2(E1: TopoDS_Edge, E2: TopoDS_Edge): Standard_Boolean;
  static OuterWire(F: TopoDS_Face): TopoDS_Wire;
  static Map3DEdges(S: TopoDS_Shape, M: TopTools_IndexedMapOfShape): void;
  static IsReallyClosed(E: TopoDS_Edge, F: TopoDS_Face): Standard_Boolean;
  static DetectClosedness(theFace: TopoDS_Face, theUclosed: Standard_Boolean, theVclosed: Standard_Boolean): void;
  static Dump(Sh: TopoDS_Shape, S: Standard_OStream): void;
  static Write_1(theShape: TopoDS_Shape, theStream: Standard_OStream, theProgress: Message_ProgressRange): void;
  static Write_2(theShape: TopoDS_Shape, theStream: Standard_OStream, theWithTriangles: Standard_Boolean, theWithNormals: Standard_Boolean, theVersion: TopTools_FormatVersion, theProgress: Message_ProgressRange): void;
  static Read_1(Sh: TopoDS_Shape, S: Standard_IStream, B: BRep_Builder, theProgress: Message_ProgressRange): void;
  static Write_3(theShape: TopoDS_Shape, theFile: Standard_CString, theProgress: Message_ProgressRange): Standard_Boolean;
  static Write_4(theShape: TopoDS_Shape, theFile: Standard_CString, theWithTriangles: Standard_Boolean, theWithNormals: Standard_Boolean, theVersion: TopTools_FormatVersion, theProgress: Message_ProgressRange): Standard_Boolean;
  static Read_2(Sh: TopoDS_Shape, File: Standard_CString, B: BRep_Builder, theProgress: Message_ProgressRange): Standard_Boolean;
  static EvalAndUpdateTol(theE: TopoDS_Edge, theC3d: Handle_Geom_Curve, theC2d: Handle_Geom2d_Curve, theS: Handle_Geom_Surface, theF: Standard_Real, theL: Standard_Real): Standard_Real;
  static OriEdgeInFace(theEdge: TopoDS_Edge, theFace: TopoDS_Face): TopAbs_Orientation;
  static RemoveInternals(theS: TopoDS_Shape, theForce: Standard_Boolean): void;
  static CheckLocations(theS: TopoDS_Shape, theProblemShapes: TopTools_ListOfShape): void;
  delete(): void;
}

export declare class TCollection_AsciiString {
  AssignCat_1(other: Standard_Character): void;
  AssignCat_2(other: Graphic3d_ZLayerId): void;
  AssignCat_3(other: Standard_Real): void;
  AssignCat_4(other: Standard_CString): void;
  AssignCat_5(other: XCAFDoc_PartId): void;
  Capitalize(): void;
  Cat_1(other: Standard_Character): XCAFDoc_PartId;
  Cat_2(other: Graphic3d_ZLayerId): XCAFDoc_PartId;
  Cat_3(other: Standard_Real): XCAFDoc_PartId;
  Cat_4(other: Standard_CString): XCAFDoc_PartId;
  Cat_5(other: XCAFDoc_PartId): XCAFDoc_PartId;
  Center(Width: Graphic3d_ZLayerId, Filler: Standard_Character): void;
  ChangeAll(aChar: Standard_Character, NewChar: Standard_Character, CaseSensitive: Standard_Boolean): void;
  Clear(): void;
  Copy_1(fromwhere: Standard_CString): void;
  Copy_2(fromwhere: XCAFDoc_PartId): void;
  Swap(theOther: XCAFDoc_PartId): void;
  FirstLocationInSet(Set: XCAFDoc_PartId, FromIndex: Graphic3d_ZLayerId, ToIndex: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  FirstLocationNotInSet(Set: XCAFDoc_PartId, FromIndex: Graphic3d_ZLayerId, ToIndex: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  Insert_1(where: Graphic3d_ZLayerId, what: Standard_Character): void;
  Insert_2(where: Graphic3d_ZLayerId, what: Standard_CString): void;
  Insert_3(where: Graphic3d_ZLayerId, what: XCAFDoc_PartId): void;
  InsertAfter(Index: Graphic3d_ZLayerId, other: XCAFDoc_PartId): void;
  InsertBefore(Index: Graphic3d_ZLayerId, other: XCAFDoc_PartId): void;
  IsEmpty(): Standard_Boolean;
  IsEqual_1(other: Standard_CString): Standard_Boolean;
  IsEqual_2(other: XCAFDoc_PartId): Standard_Boolean;
  IsDifferent_1(other: Standard_CString): Standard_Boolean;
  IsDifferent_2(other: XCAFDoc_PartId): Standard_Boolean;
  IsLess_1(other: Standard_CString): Standard_Boolean;
  IsLess_2(other: XCAFDoc_PartId): Standard_Boolean;
  IsGreater_1(other: Standard_CString): Standard_Boolean;
  IsGreater_2(other: XCAFDoc_PartId): Standard_Boolean;
  StartsWith(theStartString: XCAFDoc_PartId): Standard_Boolean;
  EndsWith(theEndString: XCAFDoc_PartId): Standard_Boolean;
  IntegerValue(): Graphic3d_ZLayerId;
  IsIntegerValue(): Standard_Boolean;
  IsRealValue(theToCheckFull: Standard_Boolean): Standard_Boolean;
  IsAscii(): Standard_Boolean;
  LeftAdjust(): void;
  LeftJustify(Width: Graphic3d_ZLayerId, Filler: Standard_Character): void;
  Length(): Graphic3d_ZLayerId;
  Location_1(other: XCAFDoc_PartId, FromIndex: Graphic3d_ZLayerId, ToIndex: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  Location_2(N: Graphic3d_ZLayerId, C: Standard_Character, FromIndex: Graphic3d_ZLayerId, ToIndex: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  LowerCase(): void;
  Prepend(other: XCAFDoc_PartId): void;
  Print(astream: Standard_OStream): void;
  Read(astream: Standard_IStream): void;
  RealValue(): Standard_Real;
  RemoveAll_1(C: Standard_Character, CaseSensitive: Standard_Boolean): void;
  RemoveAll_2(what: Standard_Character): void;
  Remove(where: Graphic3d_ZLayerId, ahowmany: Graphic3d_ZLayerId): void;
  RightAdjust(): void;
  RightJustify(Width: Graphic3d_ZLayerId, Filler: Standard_Character): void;
  Search_1(what: Standard_CString): Graphic3d_ZLayerId;
  Search_2(what: XCAFDoc_PartId): Graphic3d_ZLayerId;
  SearchFromEnd_1(what: Standard_CString): Graphic3d_ZLayerId;
  SearchFromEnd_2(what: XCAFDoc_PartId): Graphic3d_ZLayerId;
  SetValue_1(where: Graphic3d_ZLayerId, what: Standard_Character): void;
  SetValue_2(where: Graphic3d_ZLayerId, what: Standard_CString): void;
  SetValue_3(where: Graphic3d_ZLayerId, what: XCAFDoc_PartId): void;
  Split_1(where: Graphic3d_ZLayerId): XCAFDoc_PartId;
  SubString_1(FromIndex: Graphic3d_ZLayerId, ToIndex: Graphic3d_ZLayerId): XCAFDoc_PartId;
  ToCString(): Standard_CString;
  Token_1(separators: Standard_CString, whichone: Graphic3d_ZLayerId): XCAFDoc_PartId;
  Trunc(ahowmany: Graphic3d_ZLayerId): void;
  UpperCase(): void;
  UsefullLength(): Graphic3d_ZLayerId;
  Value(where: Graphic3d_ZLayerId): Standard_Character;
  static HashCode(theAsciiString: XCAFDoc_PartId, theUpperBound: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  static IsEqual_3(string1: XCAFDoc_PartId, string2: XCAFDoc_PartId): Standard_Boolean;
  static IsEqual_4(string1: XCAFDoc_PartId, string2: Standard_CString): Standard_Boolean;
  static IsSameString(theString1: XCAFDoc_PartId, theString2: XCAFDoc_PartId, theIsCaseSensitive: Standard_Boolean): Standard_Boolean;
  delete(): void;
}

  export declare class TCollection_AsciiString_1 extends TCollection_AsciiString {
    constructor();
  }

  export declare class TCollection_AsciiString_2 extends TCollection_AsciiString {
    constructor(message: Standard_CString);
  }

  export declare class TCollection_AsciiString_3 extends TCollection_AsciiString {
    constructor(message: Standard_CString, aLen: Graphic3d_ZLayerId);
  }

  export declare class TCollection_AsciiString_4 extends TCollection_AsciiString {
    constructor(aChar: Standard_Character);
  }

  export declare class TCollection_AsciiString_5 extends TCollection_AsciiString {
    constructor(length: Graphic3d_ZLayerId, filler: Standard_Character);
  }

  export declare class TCollection_AsciiString_6 extends TCollection_AsciiString {
    constructor(value: Graphic3d_ZLayerId);
  }

  export declare class TCollection_AsciiString_7 extends TCollection_AsciiString {
    constructor(value: Standard_Real);
  }

  export declare class TCollection_AsciiString_8 extends TCollection_AsciiString {
    constructor(astring: XCAFDoc_PartId);
  }

  export declare class TCollection_AsciiString_9 extends TCollection_AsciiString {
    constructor(theOther: XCAFDoc_PartId);
  }

  export declare class TCollection_AsciiString_10 extends TCollection_AsciiString {
    constructor(astring: XCAFDoc_PartId, message: Standard_Character);
  }

  export declare class TCollection_AsciiString_11 extends TCollection_AsciiString {
    constructor(astring: XCAFDoc_PartId, message: Standard_CString);
  }

  export declare class TCollection_AsciiString_12 extends TCollection_AsciiString {
    constructor(astring: XCAFDoc_PartId, message: XCAFDoc_PartId);
  }

  export declare class TCollection_AsciiString_13 extends TCollection_AsciiString {
    constructor(astring: TCollection_ExtendedString, replaceNonAscii: Standard_Character);
  }

  export declare class TCollection_AsciiString_14 extends TCollection_AsciiString {
    constructor(theStringUtf: Standard_WideChar);
  }

export declare class TCollection_ExtendedString {
  AssignCat_1(other: TCollection_ExtendedString): void;
  AssignCat_2(theChar: Standard_Utf16Char): void;
  Cat(other: TCollection_ExtendedString): TCollection_ExtendedString;
  ChangeAll(aChar: Standard_ExtCharacter, NewChar: Standard_ExtCharacter): void;
  Clear(): void;
  Copy(fromwhere: TCollection_ExtendedString): void;
  Swap(theOther: TCollection_ExtendedString): void;
  Insert_1(where: Graphic3d_ZLayerId, what: Standard_ExtCharacter): void;
  Insert_2(where: Graphic3d_ZLayerId, what: TCollection_ExtendedString): void;
  IsEmpty(): Standard_Boolean;
  IsEqual_1(other: Standard_ExtString): Standard_Boolean;
  IsEqual_2(other: TCollection_ExtendedString): Standard_Boolean;
  IsDifferent_1(other: Standard_ExtString): Standard_Boolean;
  IsDifferent_2(other: TCollection_ExtendedString): Standard_Boolean;
  IsLess_1(other: Standard_ExtString): Standard_Boolean;
  IsLess_2(other: TCollection_ExtendedString): Standard_Boolean;
  IsGreater_1(other: Standard_ExtString): Standard_Boolean;
  IsGreater_2(other: TCollection_ExtendedString): Standard_Boolean;
  StartsWith(theStartString: TCollection_ExtendedString): Standard_Boolean;
  EndsWith(theEndString: TCollection_ExtendedString): Standard_Boolean;
  IsAscii(): Standard_Boolean;
  Length(): Graphic3d_ZLayerId;
  Print(astream: Standard_OStream): void;
  RemoveAll(what: Standard_ExtCharacter): void;
  Remove(where: Graphic3d_ZLayerId, ahowmany: Graphic3d_ZLayerId): void;
  Search(what: TCollection_ExtendedString): Graphic3d_ZLayerId;
  SearchFromEnd(what: TCollection_ExtendedString): Graphic3d_ZLayerId;
  SetValue_1(where: Graphic3d_ZLayerId, what: Standard_ExtCharacter): void;
  SetValue_2(where: Graphic3d_ZLayerId, what: TCollection_ExtendedString): void;
  Split(where: Graphic3d_ZLayerId): TCollection_ExtendedString;
  Token(separators: Standard_ExtString, whichone: Graphic3d_ZLayerId): TCollection_ExtendedString;
  ToExtString(): Standard_ExtString;
  Trunc(ahowmany: Graphic3d_ZLayerId): void;
  Value(where: Graphic3d_ZLayerId): Standard_ExtCharacter;
  static HashCode(theString: TCollection_ExtendedString, theUpperBound: Graphic3d_ZLayerId): Graphic3d_ZLayerId;
  static IsEqual_3(theString1: TCollection_ExtendedString, theString2: TCollection_ExtendedString): Standard_Boolean;
  LengthOfCString(): Graphic3d_ZLayerId;
  delete(): void;
}

  export declare class TCollection_ExtendedString_1 extends TCollection_ExtendedString {
    constructor();
  }

  export declare class TCollection_ExtendedString_2 extends TCollection_ExtendedString {
    constructor(astring: Standard_CString, isMultiByte: Standard_Boolean);
  }

  export declare class TCollection_ExtendedString_3 extends TCollection_ExtendedString {
    constructor(astring: Standard_ExtString);
  }

  export declare class TCollection_ExtendedString_4 extends TCollection_ExtendedString {
    constructor(theStringUtf: Standard_WideChar);
  }

  export declare class TCollection_ExtendedString_5 extends TCollection_ExtendedString {
    constructor(aChar: Standard_Character);
  }

  export declare class TCollection_ExtendedString_6 extends TCollection_ExtendedString {
    constructor(aChar: Standard_ExtCharacter);
  }

  export declare class TCollection_ExtendedString_7 extends TCollection_ExtendedString {
    constructor(length: Graphic3d_ZLayerId, filler: Standard_ExtCharacter);
  }

  export declare class TCollection_ExtendedString_8 extends TCollection_ExtendedString {
    constructor(value: Graphic3d_ZLayerId);
  }

  export declare class TCollection_ExtendedString_9 extends TCollection_ExtendedString {
    constructor(value: Standard_Real);
  }

  export declare class TCollection_ExtendedString_10 extends TCollection_ExtendedString {
    constructor(astring: TCollection_ExtendedString);
  }

  export declare class TCollection_ExtendedString_11 extends TCollection_ExtendedString {
    constructor(theOther: TCollection_ExtendedString);
  }

  export declare class TCollection_ExtendedString_12 extends TCollection_ExtendedString {
    constructor(astring: XCAFDoc_PartId, isMultiByte: Standard_Boolean);
  }

export declare class Standard_Transient {
  Delete(): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  IsInstance_1(theType: Handle_Standard_Type): Standard_Boolean;
  IsInstance_2(theTypeName: Standard_CString): Standard_Boolean;
  IsKind_1(theType: Handle_Standard_Type): Standard_Boolean;
  IsKind_2(theTypeName: Standard_CString): Standard_Boolean;
  This(): Standard_Transient;
  GetRefCount(): Graphic3d_ZLayerId;
  IncrementRefCounter(): void;
  DecrementRefCounter(): Graphic3d_ZLayerId;
  delete(): void;
}

  export declare class Standard_Transient_1 extends Standard_Transient {
    constructor();
  }

  export declare class Standard_Transient_2 extends Standard_Transient {
    constructor(a: Standard_Transient);
  }

export declare class Message_ProgressRange {
  UserBreak(): Standard_Boolean;
  More(): Standard_Boolean;
  IsActive(): Standard_Boolean;
  Close(): void;
  delete(): void;
}

  export declare class Message_ProgressRange_1 extends Message_ProgressRange {
    constructor();
  }

  export declare class Message_ProgressRange_2 extends Message_ProgressRange {
    constructor(theOther: Message_ProgressRange);
  }

export declare class RWGltf_CafWriter extends Standard_Transient {
  constructor(theFile: XCAFDoc_PartId, theIsBinary: Standard_Boolean)
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  CoordinateSystemConverter(): RWMesh_CoordinateSystemConverter;
  ChangeCoordinateSystemConverter(): RWMesh_CoordinateSystemConverter;
  SetCoordinateSystemConverter(theConverter: RWMesh_CoordinateSystemConverter): void;
  IsBinary(): Standard_Boolean;
  TransformationFormat(): RWGltf_WriterTrsfFormat;
  SetTransformationFormat(theFormat: RWGltf_WriterTrsfFormat): void;
  NodeNameFormat(): RWMesh_NameFormat;
  SetNodeNameFormat(theFormat: RWMesh_NameFormat): void;
  MeshNameFormat(): RWMesh_NameFormat;
  SetMeshNameFormat(theFormat: RWMesh_NameFormat): void;
  IsForcedUVExport(): Standard_Boolean;
  SetForcedUVExport(theToForce: Standard_Boolean): void;
  DefaultStyle(): XCAFPrs_Style;
  SetDefaultStyle(theStyle: XCAFPrs_Style): void;
  ToEmbedTexturesInGlb(): Standard_Boolean;
  SetToEmbedTexturesInGlb(theToEmbedTexturesInGlb: Standard_Boolean): void;
  ToMergeFaces(): Standard_Boolean;
  SetMergeFaces(theToMerge: Standard_Boolean): void;
  ToSplitIndices16(): Standard_Boolean;
  SetSplitIndices16(theToSplit: Standard_Boolean): void;
  Perform_1(theDocument: Handle_TDocStd_Document, theRootLabels: TDF_LabelSequence, theLabelFilter: TColStd_MapOfAsciiString, theFileInfo: TColStd_IndexedDataMapOfStringString, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_2(theDocument: Handle_TDocStd_Document, theFileInfo: TColStd_IndexedDataMapOfStringString, theProgress: Message_ProgressRange): Standard_Boolean;
  delete(): void;
}

export declare class XCAFDoc_ShapeTool extends TDataStd_GenericEmpty {
  constructor()
  static GetID(): Standard_GUID;
  static Set(L: TDF_Label): Handle_XCAFDoc_ShapeTool;
  IsTopLevel(L: TDF_Label): Standard_Boolean;
  static IsFree(L: TDF_Label): Standard_Boolean;
  static IsShape(L: TDF_Label): Standard_Boolean;
  static IsSimpleShape(L: TDF_Label): Standard_Boolean;
  static IsReference(L: TDF_Label): Standard_Boolean;
  static IsAssembly(L: TDF_Label): Standard_Boolean;
  static IsComponent(L: TDF_Label): Standard_Boolean;
  static IsCompound(L: TDF_Label): Standard_Boolean;
  static IsSubShape_1(L: TDF_Label): Standard_Boolean;
  IsSubShape_2(shapeL: TDF_Label, sub: TopoDS_Shape): Standard_Boolean;
  SearchUsingMap(S: TopoDS_Shape, L: TDF_Label, findWithoutLoc: Standard_Boolean, findSubshape: Standard_Boolean): Standard_Boolean;
  Search(S: TopoDS_Shape, L: TDF_Label, findInstance: Standard_Boolean, findComponent: Standard_Boolean, findSubshape: Standard_Boolean): Standard_Boolean;
  FindShape_1(S: TopoDS_Shape, L: TDF_Label, findInstance: Standard_Boolean): Standard_Boolean;
  FindShape_2(S: TopoDS_Shape, findInstance: Standard_Boolean): TDF_Label;
  static GetShape_1(L: TDF_Label, S: TopoDS_Shape): Standard_Boolean;
  static GetShape_2(L: TDF_Label): TopoDS_Shape;
  NewShape(): TDF_Label;
  SetShape(L: TDF_Label, S: TopoDS_Shape): void;
  AddShape(S: TopoDS_Shape, makeAssembly: Standard_Boolean, makePrepare: Standard_Boolean): TDF_Label;
  RemoveShape(L: TDF_Label, removeCompletely: Standard_Boolean): Standard_Boolean;
  Init(): void;
  static SetAutoNaming(V: Standard_Boolean): void;
  static AutoNaming(): Standard_Boolean;
  ComputeShapes(L: TDF_Label): void;
  ComputeSimpleShapes(): void;
  GetShapes(Labels: TDF_LabelSequence): void;
  GetFreeShapes(FreeLabels: TDF_LabelSequence): void;
  static GetUsers(L: TDF_Label, Labels: TDF_LabelSequence, getsubchilds: Standard_Boolean): Graphic3d_ZLayerId;
  static GetLocation(L: TDF_Label): TopLoc_Location;
  static GetReferredShape(L: TDF_Label, Label: TDF_Label): Standard_Boolean;
  static NbComponents(L: TDF_Label, getsubchilds: Standard_Boolean): Graphic3d_ZLayerId;
  static GetComponents(L: TDF_Label, Labels: TDF_LabelSequence, getsubchilds: Standard_Boolean): Standard_Boolean;
  AddComponent_1(assembly: TDF_Label, comp: TDF_Label, Loc: TopLoc_Location): TDF_Label;
  AddComponent_2(assembly: TDF_Label, comp: TopoDS_Shape, expand: Standard_Boolean): TDF_Label;
  RemoveComponent(comp: TDF_Label): void;
  UpdateAssemblies(): void;
  FindSubShape(shapeL: TDF_Label, sub: TopoDS_Shape, L: TDF_Label): Standard_Boolean;
  AddSubShape_1(shapeL: TDF_Label, sub: TopoDS_Shape): TDF_Label;
  AddSubShape_2(shapeL: TDF_Label, sub: TopoDS_Shape, addedSubShapeL: TDF_Label): Standard_Boolean;
  FindMainShapeUsingMap(sub: TopoDS_Shape): TDF_Label;
  FindMainShape(sub: TopoDS_Shape): TDF_Label;
  static GetSubShapes(L: TDF_Label, Labels: TDF_LabelSequence): Standard_Boolean;
  BaseLabel(): TDF_Label;
  static DumpShape(theDumpLog: Standard_OStream, L: TDF_Label, level: Graphic3d_ZLayerId, deep: Standard_Boolean): void;
  ID(): Standard_GUID;
  static IsExternRef(L: TDF_Label): Standard_Boolean;
  SetExternRefs_1(SHAS: TColStd_SequenceOfHAsciiString): TDF_Label;
  SetExternRefs_2(L: TDF_Label, SHAS: TColStd_SequenceOfHAsciiString): void;
  static GetExternRefs(L: TDF_Label, SHAS: TColStd_SequenceOfHAsciiString): void;
  SetSHUO(Labels: TDF_LabelSequence, MainSHUOAttr: Handle_XCAFDoc_GraphNode): Standard_Boolean;
  static GetSHUO(SHUOLabel: TDF_Label, aSHUOAttr: Handle_XCAFDoc_GraphNode): Standard_Boolean;
  static GetAllComponentSHUO(CompLabel: TDF_Label, SHUOAttrs: TDF_AttributeSequence): Standard_Boolean;
  static GetSHUOUpperUsage(NextUsageL: TDF_Label, Labels: TDF_LabelSequence): Standard_Boolean;
  static GetSHUONextUsage(UpperUsageL: TDF_Label, Labels: TDF_LabelSequence): Standard_Boolean;
  RemoveSHUO(SHUOLabel: TDF_Label): Standard_Boolean;
  FindComponent(theShape: TopoDS_Shape, Labels: TDF_LabelSequence): Standard_Boolean;
  GetSHUOInstance(theSHUO: Handle_XCAFDoc_GraphNode): TopoDS_Shape;
  SetInstanceSHUO(theShape: TopoDS_Shape): Handle_XCAFDoc_GraphNode;
  GetAllSHUOInstances(theSHUO: Handle_XCAFDoc_GraphNode, theSHUOShapeSeq: TopTools_SequenceOfShape): Standard_Boolean;
  static FindSHUO(Labels: TDF_LabelSequence, theSHUOAttr: Handle_XCAFDoc_GraphNode): Standard_Boolean;
  Expand(Shape: TDF_Label): Standard_Boolean;
  GetNamedProperties_1(theLabel: TDF_Label, theToCreate: Standard_Boolean): Handle_TDataStd_NamedData;
  GetNamedProperties_2(theShape: TopoDS_Shape, theToCreate: Standard_Boolean): Handle_TDataStd_NamedData;
  DumpJson(theOStream: Standard_OStream, theDepth: Graphic3d_ZLayerId): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  NewEmpty(): Handle_TDF_Attribute;
  delete(): void;
}

export declare class Handle_XCAFDoc_ShapeTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFDoc_ShapeTool): void;
  get(): XCAFDoc_ShapeTool;
  delete(): void;
}

  export declare class Handle_XCAFDoc_ShapeTool_1 extends Handle_XCAFDoc_ShapeTool {
    constructor();
  }

  export declare class Handle_XCAFDoc_ShapeTool_2 extends Handle_XCAFDoc_ShapeTool {
    constructor(thePtr: XCAFDoc_ShapeTool);
  }

  export declare class Handle_XCAFDoc_ShapeTool_3 extends Handle_XCAFDoc_ShapeTool {
    constructor(theHandle: Handle_XCAFDoc_ShapeTool);
  }

  export declare class Handle_XCAFDoc_ShapeTool_4 extends Handle_XCAFDoc_ShapeTool {
    constructor(theHandle: Handle_XCAFDoc_ShapeTool);
  }

export declare class XCAFDoc_DocumentTool extends TDataStd_GenericEmpty {
  constructor()
  static GetID(): Standard_GUID;
  static Set(L: TDF_Label, IsAcces: Standard_Boolean): Handle_XCAFDoc_DocumentTool;
  static IsXCAFDocument(Doc: Handle_TDocStd_Document): Standard_Boolean;
  static DocLabel(acces: TDF_Label): TDF_Label;
  static ShapesLabel(acces: TDF_Label): TDF_Label;
  static ColorsLabel(acces: TDF_Label): TDF_Label;
  static LayersLabel(acces: TDF_Label): TDF_Label;
  static DGTsLabel(acces: TDF_Label): TDF_Label;
  static MaterialsLabel(acces: TDF_Label): TDF_Label;
  static ViewsLabel(acces: TDF_Label): TDF_Label;
  static ClippingPlanesLabel(acces: TDF_Label): TDF_Label;
  static NotesLabel(acces: TDF_Label): TDF_Label;
  static VisMaterialLabel(theLabel: TDF_Label): TDF_Label;
  static ShapeTool(acces: TDF_Label): Handle_XCAFDoc_ShapeTool;
  static CheckShapeTool(theAcces: TDF_Label): Standard_Boolean;
  static ColorTool(acces: TDF_Label): Handle_XCAFDoc_ColorTool;
  static CheckColorTool(theAcces: TDF_Label): Standard_Boolean;
  static VisMaterialTool(theLabel: TDF_Label): Handle_XCAFDoc_VisMaterialTool;
  static CheckVisMaterialTool(theAcces: TDF_Label): Standard_Boolean;
  static LayerTool(acces: TDF_Label): Handle_XCAFDoc_LayerTool;
  static CheckLayerTool(theAcces: TDF_Label): Standard_Boolean;
  static DimTolTool(acces: TDF_Label): Handle_XCAFDoc_DimTolTool;
  static CheckDimTolTool(theAcces: TDF_Label): Standard_Boolean;
  static MaterialTool(acces: TDF_Label): Handle_XCAFDoc_MaterialTool;
  static CheckMaterialTool(theAcces: TDF_Label): Standard_Boolean;
  static ViewTool(acces: TDF_Label): Handle_XCAFDoc_ViewTool;
  static CheckViewTool(theAcces: TDF_Label): Standard_Boolean;
  static ClippingPlaneTool(acces: TDF_Label): Handle_XCAFDoc_ClippingPlaneTool;
  static CheckClippingPlaneTool(theAcces: TDF_Label): Standard_Boolean;
  static NotesTool(acces: TDF_Label): Handle_XCAFDoc_NotesTool;
  static CheckNotesTool(theAcces: TDF_Label): Standard_Boolean;
  static GetLengthUnit_1(theDoc: Handle_TDocStd_Document, theResut: Standard_Real, theBaseUnit: UnitsMethods_LengthUnit): Standard_Boolean;
  static GetLengthUnit_2(theDoc: Handle_TDocStd_Document, theResut: Standard_Real): Standard_Boolean;
  static SetLengthUnit_1(theDoc: Handle_TDocStd_Document, theUnitValue: Standard_Real): void;
  static SetLengthUnit_2(theDoc: Handle_TDocStd_Document, theUnitValue: Standard_Real, theBaseUnit: UnitsMethods_LengthUnit): void;
  Init(): void;
  ID(): Standard_GUID;
  AfterRetrieval(forceIt: Standard_Boolean): Standard_Boolean;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  NewEmpty(): Handle_TDF_Attribute;
  delete(): void;
}

export declare class BRepPrimAPI_MakeBox extends BRepBuilderAPI_MakeShape {
  Init_1(theDX: Standard_Real, theDY: Standard_Real, theDZ: Standard_Real): void;
  Init_2(thePnt: gp_Pnt, theDX: Standard_Real, theDY: Standard_Real, theDZ: Standard_Real): void;
  Init_3(thePnt1: gp_Pnt, thePnt2: gp_Pnt): void;
  Init_4(theAxes: gp_Ax2, theDX: Standard_Real, theDY: Standard_Real, theDZ: Standard_Real): void;
  Wedge(): BRepPrim_Wedge;
  Build(theRange: Message_ProgressRange): void;
  Shell(): TopoDS_Shell;
  Solid(): TopoDS_Solid;
  BottomFace(): TopoDS_Face;
  BackFace(): TopoDS_Face;
  FrontFace(): TopoDS_Face;
  LeftFace(): TopoDS_Face;
  RightFace(): TopoDS_Face;
  TopFace(): TopoDS_Face;
  delete(): void;
}

  export declare class BRepPrimAPI_MakeBox_1 extends BRepPrimAPI_MakeBox {
    constructor();
  }

  export declare class BRepPrimAPI_MakeBox_2 extends BRepPrimAPI_MakeBox {
    constructor(dx: Standard_Real, dy: Standard_Real, dz: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeBox_3 extends BRepPrimAPI_MakeBox {
    constructor(P: gp_Pnt, dx: Standard_Real, dy: Standard_Real, dz: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeBox_4 extends BRepPrimAPI_MakeBox {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepPrimAPI_MakeBox_5 extends BRepPrimAPI_MakeBox {
    constructor(Axes: gp_Ax2, dx: Standard_Real, dy: Standard_Real, dz: Standard_Real);
  }

export declare class BRepPrimAPI_MakeOneAxis extends BRepBuilderAPI_MakeShape {
  OneAxis(): Standard_Address;
  Build(theRange: Message_ProgressRange): void;
  Face(): TopoDS_Face;
  Shell(): TopoDS_Shell;
  Solid(): TopoDS_Solid;
  delete(): void;
}

export declare class BRepPrimAPI_MakeSphere extends BRepPrimAPI_MakeOneAxis {
  OneAxis(): Standard_Address;
  Sphere(): BRepPrim_Sphere;
  delete(): void;
}

  export declare class BRepPrimAPI_MakeSphere_1 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_2 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_3 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_4 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle3: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_5 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_6 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_7 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_8 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle3: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_9 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_10 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_11 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_12 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle3: Standard_Real);
  }

export declare class BRepMesh_DiscretRoot extends Standard_Transient {
  SetShape(theShape: TopoDS_Shape): void;
  Shape(): TopoDS_Shape;
  IsDone(): Standard_Boolean;
  Perform(theRange: Message_ProgressRange): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

export declare class BRepMesh_IncrementalMesh extends BRepMesh_DiscretRoot {
  Perform_1(theRange: Message_ProgressRange): void;
  Perform_2(theContext: any, theRange: Message_ProgressRange): void;
  Parameters(): IMeshTools_Parameters;
  ChangeParameters(): IMeshTools_Parameters;
  IsModified(): Standard_Boolean;
  GetStatusFlags(): Graphic3d_ZLayerId;
  static Discret(theShape: TopoDS_Shape, theLinDeflection: Standard_Real, theAngDeflection: Standard_Real, theAlgo: BRepMesh_DiscretRoot): Graphic3d_ZLayerId;
  static IsParallelDefault(): Standard_Boolean;
  static SetParallelDefault(isInParallel: Standard_Boolean): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  delete(): void;
}

  export declare class BRepMesh_IncrementalMesh_1 extends BRepMesh_IncrementalMesh {
    constructor();
  }

  export declare class BRepMesh_IncrementalMesh_2 extends BRepMesh_IncrementalMesh {
    constructor(theShape: TopoDS_Shape, theLinDeflection: Standard_Real, isRelative: Standard_Boolean, theAngDeflection: Standard_Real, isInParallel: Standard_Boolean);
  }

  export declare class BRepMesh_IncrementalMesh_3 extends BRepMesh_IncrementalMesh {
    constructor(theShape: TopoDS_Shape, theParameters: IMeshTools_Parameters, theRange: Message_ProgressRange);
  }

export declare class TColStd_IndexedDataMapOfStringString extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TColStd_IndexedDataMapOfStringString): void;
  Assign(theOther: TColStd_IndexedDataMapOfStringString): TColStd_IndexedDataMapOfStringString;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: TCollection_AsciiString, theItem: TCollection_AsciiString): Standard_Integer;
  Contains(theKey1: TCollection_AsciiString): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TCollection_AsciiString, theItem: TCollection_AsciiString): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TCollection_AsciiString): void;
  FindKey(theIndex: Standard_Integer): TCollection_AsciiString;
  FindFromIndex(theIndex: Standard_Integer): TCollection_AsciiString;
  ChangeFromIndex(theIndex: Standard_Integer): TCollection_AsciiString;
  FindIndex(theKey1: TCollection_AsciiString): Standard_Integer;
  ChangeFromKey(theKey1: TCollection_AsciiString): TCollection_AsciiString;
  Seek(theKey1: TCollection_AsciiString): TCollection_AsciiString;
  ChangeSeek(theKey1: TCollection_AsciiString): TCollection_AsciiString;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: Handle_NCollection_BaseAllocator): void;
  Size(): Standard_Integer;
  delete(): void;
}

  export declare class TColStd_IndexedDataMapOfStringString_1 extends TColStd_IndexedDataMapOfStringString {
    constructor();
  }

  export declare class TColStd_IndexedDataMapOfStringString_2 extends TColStd_IndexedDataMapOfStringString {
    constructor(theNbBuckets: Standard_Integer, theAllocator: Handle_NCollection_BaseAllocator);
  }

  export declare class TColStd_IndexedDataMapOfStringString_3 extends TColStd_IndexedDataMapOfStringString {
    constructor(theOther: TColStd_IndexedDataMapOfStringString);
  }

export declare class CustomClass {
  constructor();
  static SayHello(): void;
  delete(): void;
}

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = number;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

declare namespace FS {
  interface Lookup {
      path: string;
      node: FSNode;
  }

  interface FSStream {}
  interface FSNode {}
  interface ErrnoError {}

  let ignorePermissions: boolean;
  let trackingDelegate: any;
  let tracking: any;
  let genericErrors: any;

  //
  // paths
  //
  function lookupPath(path: string, opts: any): Lookup;
  function getPath(node: FSNode): string;

  //
  // nodes
  //
  function isFile(mode: number): boolean;
  function isDir(mode: number): boolean;
  function isLink(mode: number): boolean;
  function isChrdev(mode: number): boolean;
  function isBlkdev(mode: number): boolean;
  function isFIFO(mode: number): boolean;
  function isSocket(mode: number): boolean;

  //
  // devices
  //
  function major(dev: number): number;
  function minor(dev: number): number;
  function makedev(ma: number, mi: number): number;
  function registerDevice(dev: number, ops: any): void;

  //
  // core
  //
  function syncfs(populate: boolean, callback: (e: any) => any): void;
  function syncfs(callback: (e: any) => any, populate?: boolean): void;
  function mount(type: any, opts: any, mountpoint: string): any;
  function unmount(mountpoint: string): void;

  function mkdir(path: string, mode?: number): any;
  function mkdev(path: string, mode?: number, dev?: number): any;
  function symlink(oldpath: string, newpath: string): any;
  function rename(old_path: string, new_path: string): void;
  function rmdir(path: string): void;
  function readdir(path: string): any;
  function unlink(path: string): void;
  function readlink(path: string): string;
  function stat(path: string, dontFollow?: boolean): any;
  function lstat(path: string): any;
  function chmod(path: string, mode: number, dontFollow?: boolean): void;
  function lchmod(path: string, mode: number): void;
  function fchmod(fd: number, mode: number): void;
  function chown(path: string, uid: number, gid: number, dontFollow?: boolean): void;
  function lchown(path: string, uid: number, gid: number): void;
  function fchown(fd: number, uid: number, gid: number): void;
  function truncate(path: string, len: number): void;
  function ftruncate(fd: number, len: number): void;
  function utime(path: string, atime: number, mtime: number): void;
  function open(path: string, flags: string, mode?: number, fd_start?: number, fd_end?: number): FSStream;
  function close(stream: FSStream): void;
  function llseek(stream: FSStream, offset: number, whence: number): any;
  function read(stream: FSStream, buffer: ArrayBufferView, offset: number, length: number, position?: number): number;
  function write(
      stream: FSStream,
      buffer: ArrayBufferView,
      offset: number,
      length: number,
      position?: number,
      canOwn?: boolean,
  ): number;
  function allocate(stream: FSStream, offset: number, length: number): void;
  function mmap(
      stream: FSStream,
      buffer: ArrayBufferView,
      offset: number,
      length: number,
      position: number,
      prot: number,
      flags: number,
  ): any;
  function ioctl(stream: FSStream, cmd: any, arg: any): any;
  function readFile(path: string, opts: { encoding: 'binary'; flags?: string }): Uint8Array;
  function readFile(path: string, opts: { encoding: 'utf8'; flags?: string }): string;
  function readFile(path: string, opts?: { flags?: string }): Uint8Array;
  function writeFile(path: string, data: string | ArrayBufferView, opts?: { flags?: string }): void;

  //
  // module-level FS code
  //
  function cwd(): string;
  function chdir(path: string): void;
  function init(
      input: null | (() => number | null),
      output: null | ((c: number) => any),
      error: null | ((c: number) => any),
  ): void;

  function createLazyFile(
      parent: string | FSNode,
      name: string,
      url: string,
      canRead: boolean,
      canWrite: boolean,
  ): FSNode;
  function createPreloadedFile(
      parent: string | FSNode,
      name: string,
      url: string,
      canRead: boolean,
      canWrite: boolean,
      onload?: () => void,
      onerror?: () => void,
      dontCreateFile?: boolean,
      canOwn?: boolean,
  ): void;
  function createDataFile(
      parent: string | FSNode,
      name: string,
      data: ArrayBufferView | string,
      canRead: boolean,
      canWrite: boolean,
      canOwn: boolean,
  ): FSNode;
  interface AnalysisResults {
    isRoot: boolean,
    exists: boolean,
    error: Error,
    name: string,
    path: any,
    object: any,
    parentExists: boolean,
    parentPath: any,
    parentObject: any
  }
  function analyzePath(path: string): AnalysisResults;
}


export type OpenCascadeInstance = {FS: typeof FS} & {
  TDF_Label: typeof TDF_Label;
  TDF_Attribute: typeof TDF_Attribute;
  TDF_LabelSequence: typeof TDF_LabelSequence;
  TDF_LabelSequence_1: typeof TDF_LabelSequence_1;
  TDF_LabelSequence_2: typeof TDF_LabelSequence_2;
  TDF_LabelSequence_3: typeof TDF_LabelSequence_3;
  NCollection_BaseSequence: typeof NCollection_BaseSequence;
  NCollection_BaseMap: typeof NCollection_BaseMap;
  STEPCAFControl_Reader: typeof STEPCAFControl_Reader;
  STEPCAFControl_Reader_1: typeof STEPCAFControl_Reader_1;
  STEPCAFControl_Reader_2: typeof STEPCAFControl_Reader_2;
  BRepAlgoAPI_BuilderAlgo: typeof BRepAlgoAPI_BuilderAlgo;
  BRepAlgoAPI_BuilderAlgo_1: typeof BRepAlgoAPI_BuilderAlgo_1;
  BRepAlgoAPI_BuilderAlgo_2: typeof BRepAlgoAPI_BuilderAlgo_2;
  BRepAlgoAPI_Cut: typeof BRepAlgoAPI_Cut;
  BRepAlgoAPI_Cut_1: typeof BRepAlgoAPI_Cut_1;
  BRepAlgoAPI_Cut_2: typeof BRepAlgoAPI_Cut_2;
  BRepAlgoAPI_Cut_3: typeof BRepAlgoAPI_Cut_3;
  BRepAlgoAPI_Cut_4: typeof BRepAlgoAPI_Cut_4;
  BRepAlgoAPI_Algo: typeof BRepAlgoAPI_Algo;
  BRepAlgoAPI_BooleanOperation: typeof BRepAlgoAPI_BooleanOperation;
  BRepAlgoAPI_BooleanOperation_1: typeof BRepAlgoAPI_BooleanOperation_1;
  BRepAlgoAPI_BooleanOperation_2: typeof BRepAlgoAPI_BooleanOperation_2;
  CDM_Document: typeof CDM_Document;
  Handle_TDocStd_Document: typeof Handle_TDocStd_Document;
  Handle_TDocStd_Document_1: typeof Handle_TDocStd_Document_1;
  Handle_TDocStd_Document_2: typeof Handle_TDocStd_Document_2;
  Handle_TDocStd_Document_3: typeof Handle_TDocStd_Document_3;
  Handle_TDocStd_Document_4: typeof Handle_TDocStd_Document_4;
  TDocStd_Document: typeof TDocStd_Document;
  IFSelect_ReturnStatus: IFSelect_ReturnStatus;
  TopoDS_Shape: typeof TopoDS_Shape;
  BRepBuilderAPI_MakeShape: typeof BRepBuilderAPI_MakeShape;
  BRepBuilderAPI_Command: typeof BRepBuilderAPI_Command;
  gp_GTrsf: typeof gp_GTrsf;
  gp_GTrsf_1: typeof gp_GTrsf_1;
  gp_GTrsf_2: typeof gp_GTrsf_2;
  gp_GTrsf_3: typeof gp_GTrsf_3;
  gp_XY: typeof gp_XY;
  gp_XY_1: typeof gp_XY_1;
  gp_XY_2: typeof gp_XY_2;
  gp_Sphere: typeof gp_Sphere;
  gp_Sphere_1: typeof gp_Sphere_1;
  gp_Sphere_2: typeof gp_Sphere_2;
  gp_Ax3: typeof gp_Ax3;
  gp_Ax3_1: typeof gp_Ax3_1;
  gp_Ax3_2: typeof gp_Ax3_2;
  gp_Ax3_3: typeof gp_Ax3_3;
  gp_Ax3_4: typeof gp_Ax3_4;
  gp_Elips: typeof gp_Elips;
  gp_Elips_1: typeof gp_Elips_1;
  gp_Elips_2: typeof gp_Elips_2;
  gp_Pnt: typeof gp_Pnt;
  gp_Pnt_1: typeof gp_Pnt_1;
  gp_Pnt_2: typeof gp_Pnt_2;
  gp_Pnt_3: typeof gp_Pnt_3;
  gp_XYZ: typeof gp_XYZ;
  gp_XYZ_1: typeof gp_XYZ_1;
  gp_XYZ_2: typeof gp_XYZ_2;
  gp_Circ: typeof gp_Circ;
  gp_Circ_1: typeof gp_Circ_1;
  gp_Circ_2: typeof gp_Circ_2;
  gp_Dir: typeof gp_Dir;
  gp_Dir_1: typeof gp_Dir_1;
  gp_Dir_2: typeof gp_Dir_2;
  gp_Dir_3: typeof gp_Dir_3;
  gp_Dir_4: typeof gp_Dir_4;
  gp_Ax1: typeof gp_Ax1;
  gp_Ax1_1: typeof gp_Ax1_1;
  gp_Ax1_2: typeof gp_Ax1_2;
  gp_Cylinder: typeof gp_Cylinder;
  gp_Cylinder_1: typeof gp_Cylinder_1;
  gp_Cylinder_2: typeof gp_Cylinder_2;
  gp_Ax2: typeof gp_Ax2;
  gp_Ax2_1: typeof gp_Ax2_1;
  gp_Ax2_2: typeof gp_Ax2_2;
  gp_Ax2_3: typeof gp_Ax2_3;
  gp_Vec: typeof gp_Vec;
  gp_Vec_1: typeof gp_Vec_1;
  gp_Vec_2: typeof gp_Vec_2;
  gp_Vec_3: typeof gp_Vec_3;
  gp_Vec_4: typeof gp_Vec_4;
  gp_Vec_5: typeof gp_Vec_5;
  gp_Trsf: typeof gp_Trsf;
  gp_Trsf_1: typeof gp_Trsf_1;
  gp_Trsf_2: typeof gp_Trsf_2;
  TDataStd_GenericEmpty: typeof TDataStd_GenericEmpty;
  BRepTools: typeof BRepTools;
  TCollection_AsciiString: typeof TCollection_AsciiString;
  TCollection_AsciiString_1: typeof TCollection_AsciiString_1;
  TCollection_AsciiString_2: typeof TCollection_AsciiString_2;
  TCollection_AsciiString_3: typeof TCollection_AsciiString_3;
  TCollection_AsciiString_4: typeof TCollection_AsciiString_4;
  TCollection_AsciiString_5: typeof TCollection_AsciiString_5;
  TCollection_AsciiString_6: typeof TCollection_AsciiString_6;
  TCollection_AsciiString_7: typeof TCollection_AsciiString_7;
  TCollection_AsciiString_8: typeof TCollection_AsciiString_8;
  TCollection_AsciiString_9: typeof TCollection_AsciiString_9;
  TCollection_AsciiString_10: typeof TCollection_AsciiString_10;
  TCollection_AsciiString_11: typeof TCollection_AsciiString_11;
  TCollection_AsciiString_12: typeof TCollection_AsciiString_12;
  TCollection_AsciiString_13: typeof TCollection_AsciiString_13;
  TCollection_AsciiString_14: typeof TCollection_AsciiString_14;
  TCollection_ExtendedString: typeof TCollection_ExtendedString;
  TCollection_ExtendedString_1: typeof TCollection_ExtendedString_1;
  TCollection_ExtendedString_2: typeof TCollection_ExtendedString_2;
  TCollection_ExtendedString_3: typeof TCollection_ExtendedString_3;
  TCollection_ExtendedString_4: typeof TCollection_ExtendedString_4;
  TCollection_ExtendedString_5: typeof TCollection_ExtendedString_5;
  TCollection_ExtendedString_6: typeof TCollection_ExtendedString_6;
  TCollection_ExtendedString_7: typeof TCollection_ExtendedString_7;
  TCollection_ExtendedString_8: typeof TCollection_ExtendedString_8;
  TCollection_ExtendedString_9: typeof TCollection_ExtendedString_9;
  TCollection_ExtendedString_10: typeof TCollection_ExtendedString_10;
  TCollection_ExtendedString_11: typeof TCollection_ExtendedString_11;
  TCollection_ExtendedString_12: typeof TCollection_ExtendedString_12;
  Standard_Transient: typeof Standard_Transient;
  Standard_Transient_1: typeof Standard_Transient_1;
  Standard_Transient_2: typeof Standard_Transient_2;
  Message_ProgressRange: typeof Message_ProgressRange;
  Message_ProgressRange_1: typeof Message_ProgressRange_1;
  Message_ProgressRange_2: typeof Message_ProgressRange_2;
  RWGltf_CafWriter: typeof RWGltf_CafWriter;
  XCAFDoc_ShapeTool: typeof XCAFDoc_ShapeTool;
  Handle_XCAFDoc_ShapeTool: typeof Handle_XCAFDoc_ShapeTool;
  Handle_XCAFDoc_ShapeTool_1: typeof Handle_XCAFDoc_ShapeTool_1;
  Handle_XCAFDoc_ShapeTool_2: typeof Handle_XCAFDoc_ShapeTool_2;
  Handle_XCAFDoc_ShapeTool_3: typeof Handle_XCAFDoc_ShapeTool_3;
  Handle_XCAFDoc_ShapeTool_4: typeof Handle_XCAFDoc_ShapeTool_4;
  XCAFDoc_DocumentTool: typeof XCAFDoc_DocumentTool;
  BRepPrimAPI_MakeBox: typeof BRepPrimAPI_MakeBox;
  BRepPrimAPI_MakeBox_1: typeof BRepPrimAPI_MakeBox_1;
  BRepPrimAPI_MakeBox_2: typeof BRepPrimAPI_MakeBox_2;
  BRepPrimAPI_MakeBox_3: typeof BRepPrimAPI_MakeBox_3;
  BRepPrimAPI_MakeBox_4: typeof BRepPrimAPI_MakeBox_4;
  BRepPrimAPI_MakeBox_5: typeof BRepPrimAPI_MakeBox_5;
  BRepPrimAPI_MakeOneAxis: typeof BRepPrimAPI_MakeOneAxis;
  BRepPrimAPI_MakeSphere: typeof BRepPrimAPI_MakeSphere;
  BRepPrimAPI_MakeSphere_1: typeof BRepPrimAPI_MakeSphere_1;
  BRepPrimAPI_MakeSphere_2: typeof BRepPrimAPI_MakeSphere_2;
  BRepPrimAPI_MakeSphere_3: typeof BRepPrimAPI_MakeSphere_3;
  BRepPrimAPI_MakeSphere_4: typeof BRepPrimAPI_MakeSphere_4;
  BRepPrimAPI_MakeSphere_5: typeof BRepPrimAPI_MakeSphere_5;
  BRepPrimAPI_MakeSphere_6: typeof BRepPrimAPI_MakeSphere_6;
  BRepPrimAPI_MakeSphere_7: typeof BRepPrimAPI_MakeSphere_7;
  BRepPrimAPI_MakeSphere_8: typeof BRepPrimAPI_MakeSphere_8;
  BRepPrimAPI_MakeSphere_9: typeof BRepPrimAPI_MakeSphere_9;
  BRepPrimAPI_MakeSphere_10: typeof BRepPrimAPI_MakeSphere_10;
  BRepPrimAPI_MakeSphere_11: typeof BRepPrimAPI_MakeSphere_11;
  BRepPrimAPI_MakeSphere_12: typeof BRepPrimAPI_MakeSphere_12;
  BRepMesh_DiscretRoot: typeof BRepMesh_DiscretRoot;
  BRepMesh_IncrementalMesh: typeof BRepMesh_IncrementalMesh;
  BRepMesh_IncrementalMesh_1: typeof BRepMesh_IncrementalMesh_1;
  BRepMesh_IncrementalMesh_2: typeof BRepMesh_IncrementalMesh_2;
  BRepMesh_IncrementalMesh_3: typeof BRepMesh_IncrementalMesh_3;
  TColStd_IndexedDataMapOfStringString: typeof TColStd_IndexedDataMapOfStringString;
  TColStd_IndexedDataMapOfStringString_1: typeof TColStd_IndexedDataMapOfStringString_1;
  TColStd_IndexedDataMapOfStringString_2: typeof TColStd_IndexedDataMapOfStringString_2;
  TColStd_IndexedDataMapOfStringString_3: typeof TColStd_IndexedDataMapOfStringString_3;
  CustomClass: typeof CustomClass;
};

declare function init(): Promise<OpenCascadeInstance>;

export default init;
