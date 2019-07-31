import * as React from 'react';

export interface QueryFieldProps {
  additionalPlugins?: any[];
  cleanText?: (text: string) => string;
  disabled?: boolean;
  initialQuery: string | null;
  onRunQuery?: () => void;
  onChange?: (value: string) => void;
  onTypeahead?: (typeahead: TypeaheadInput) => TypeaheadOutput;
  onWillApplySuggestion?: (suggestion: string, state: QueryFieldState) => string;
  placeholder?: string;
  portalOrigin?: string;
  syntax?: string;
  syntaxLoaded?: boolean;
}

export interface QueryFieldState {
  suggestions: CompletionItemGroup[];
  typeaheadContext: string | null;
  typeaheadIndex: number;
  typeaheadPrefix: string;
  typeaheadText: string;
  value: any;
  lastExecutedValue: Value;
}

export interface TypeaheadInput {
  editorNode: Element;
  prefix: string;
  selection?: Selection;
  text: string;
  value: Value;
  wrapperNode: Element;
}

export class QueryField extends React.PureComponent<QueryFieldProps, QueryFieldState> {
  menuEl: HTMLElement | null;
  placeholdersBuffer: PlaceholdersBuffer;
  plugins: any[];
  resetTimer: any;
  mounted: boolean;
  updateHighlightsTimer: any;

  constructor(props: QueryFieldProps, context: Context<any>);
}

export interface PortalProps {
  index?: number;
  origin: string;
}

export class Portal extends React.PureComponent<PortalProps, {}> {
  node: HTMLElement;

  constructor(props: PortalProps);
}
