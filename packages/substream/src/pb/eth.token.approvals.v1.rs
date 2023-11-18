// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Approvals {
    #[prost(message, repeated, tag="1")]
    pub approvals: ::prost::alloc::vec::Vec<Approval>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Approval {
    /// Schema is the string representation of one of the enum defined in Schema. We use it as a String
    /// here because Rust code uses a `u32` for its representation but it's nicer for the file format
    /// to have the type as a string.
    #[prost(string, tag="1")]
    pub schema: ::prost::alloc::string::String,
    /// The transaction hash that generated that transfer.
    #[prost(string, tag="2")]
    pub trx_hash: ::prost::alloc::string::String,
    /// The index of the log within the transaction's receipts of the block.
    #[prost(uint64, tag="3")]
    pub log_index: u64,
    #[prost(string, tag="4")]
    pub token: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub spender: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
    pub quantity: ::prost::alloc::string::String,
}
/// Nested message and enum types in `Approval`.
pub mod approval {
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum Schema {
        Erc20 = 0,
    }
    impl Schema {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                Schema::Erc20 => "erc20",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "erc20" => Some(Self::Erc20),
                _ => None,
            }
        }
    }
}
// @@protoc_insertion_point(module)
